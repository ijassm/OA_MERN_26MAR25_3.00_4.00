require("dotenv").config();

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const todoRoute = require("./src/routes/todo.route");
const PORT = 5000;

app.use(express.json());


// MongoDB Connection with Connection Pooling
const mongoOptions = {
    maxPoolSize: 20,
};

let isConnected = false;

const connectToMongoDB = async () => {
    if (!isConnected) {
        try {
            const mongoUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@students.jooqal4.mongodb.net/?retryWrites=true&w=majority&appName=STUDENTS`;
            await mongoose.connect(mongoUri, mongoOptions);
            isConnected = true;
            console.log("Connected to MongoDB with connection pooling!");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }
};


// Middleware to ensure MongoDB connection
app.use(async (_, res, next) => {
    try {
        await connectToMongoDB();
        next();
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});


app.use("/api/todo", todoRoute);


app.get("/", (_, res) => {
    res.send("Welcome to TODO backend");
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
