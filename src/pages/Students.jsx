import StudentCard from "../components/StudentCard";

export default function Student({students}) {
  return (
    <div>
      <h1 className="font-serif font-semibold">Student List</h1>
      <div>
        {students.map((student) => (
          <StudentCard
            key={student._id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

