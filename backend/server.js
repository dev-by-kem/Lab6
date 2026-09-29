import express from "express";
import cors from "cors";
import Student from "./models/students.js"

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from my server!");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Express!"
    });
});

app.get("/api/students", async (req, res) => {
    const students = await Student.find();
    res.json(students)
})