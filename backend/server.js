const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let students = [];

// GET all students
app.get("/students", (req, res) => {
  res.json(students);
});

// ADD new student
app.post("/students", (req, res) => {
  const student = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    course: req.body.course
  };

  students.push(student);
  res.json(student);
});

// DELETE student by ID
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({ message: "Student deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});