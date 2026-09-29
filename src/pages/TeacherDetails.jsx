import { useParams } from "react-router-dom";
import TeacherData from "../data/teachers.json";

export default function TeacherDetails() {
    const { id } = useParams();
    const teacher = TeacherData.find((teacher) => teacher.id === Number(id));

    if (!teacher) {
        return <div>Teacher not found.</div>;
    }

    return (
        <div>
            <p>Name: {teacher.name}</p>
            <p>Specialization: {teacher.spec}</p>
            <p>Department: {teacher.dept}</p>
            <p>Sex: {teacher.sex}</p>
        </div>
    );
}
