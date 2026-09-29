import TeacherData from "../data/teachers.json";
import TeacherCard from "../components/TeacherCard";

export default function Teacher() {
  return (
    <div className = "flex flex-col border h-screen p-4">
      <h1 className="font-serif font-semibold">Teacher List</h1>
      <div className = "flex flex-row border h-fit p-4 justify-evenly">
        {TeacherData.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            id={teacher.id}
            name={teacher.name}
            spec={teacher.spec}
            dept={teacher.dept}
            sex={teacher.sex}
          />
        ))}
      </div>
    </div>
  );
}
