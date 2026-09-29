import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    snum: Number,
    section: String,
    course: String,
    sex: String,
    year: String

})

const Student = mongoose.model("Student", studentSchema)

export default Student;

mongoose.connect("mongodb://localhost:27017/SialanaDB")
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch(error => {
        console.log(error)
    })