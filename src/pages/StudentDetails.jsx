import { useParams } from "react-router-dom";
import StudentData from "../data/students.json";

export default function StudentDetails() {
    const { id } = useParams();
    const student = StudentData.find((student) => student.id === Number(id));

    if (!student) {
        return <div>Student not found.</div>;
    }

    return (
        <div>
            <p>Name: {student.name}</p>
            <p>Student Number: {student.snum}</p>
            <p>Section: {student.section}</p>
            <p>Course: {student.course}</p>
            <p>Year: {student.year}</p>
            <p>Sex: {student.sex}</p>
        </div>
    );
}
