const express = require('express');
const { uid } = require('uid');
const app = express();
const port = 3000;

let students = [];

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

app.get("/get", (req, res) => {
    res.send({ success: true, message: "Get all students", data: students });
})

app.post("/create", (req, res) => {
    const student = req.body;

    if (Object.keys(student).length === 0) {
        return res.send({ success: false, message: "student data is required" });
    }

    students.push({ ...student, _id: uid() });
    res.send({ success: true, message: "Created successfully!", data: students });
})

app.patch("/update/:id", (req, res) => {
    let updatedStudent = req.body;
    const id = req.params.id; // get id as string, not object

    if (Object.keys(updatedStudent).length === 0) {
        return res.send({ success: false, message: "Student data is required" });
    }

    let studentFound = false;

    const updatedStudents = students.map((data) => {
        if (data._id === id) {
            studentFound = true;
            return { ...data, ...updatedStudent };
        }
        return data;
    });

    if (!studentFound) {
        return res.send({ success: false, message: "Student not found" });
    }

    // Replace original array if update succeeded
    students = updatedStudents;

    res.send({ success: true, message: "Updated successfully!", data: students });
});


app.delete("/delete/:id", (req, res) => {

    const id = req.params.id; // get id as string, not object

    students = students.filter((data) => data._id !== id);
    res.send({ success: true, message: "Form submitted successfully!", data: students });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});