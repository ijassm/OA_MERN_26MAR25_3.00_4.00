const express = require('express');
const app = express();
const port = 3000;

const students = [];


app.use(express.json()); // Middleware to parse JSON bodies

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
})

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.get("/data", (req, res) => {
    res.send({ message: "Get all students", data: students });
})

app.post("/submit", (req, res) => {
    students.push(req.body);
    res.send({ message: "Form submitted successfully!", data: students });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});