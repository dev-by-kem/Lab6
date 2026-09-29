import {Link} from "react-router-dom";

export default function StudentCard({student}) {
  return (
    <div>
      <p>Name: {student.name}</p>
      <p>Student Number: {student.snum}</p>
      <p>Section: {student.section}</p>
      <p>Course: {student.course}</p>
      <p>Year: {student.year}</p>
      <p>Sex: {student.sex}</p>

      {/* <Link to={`/student/${id}`}> View Details </Link> */}

    </div>
  )
}