import {Link} from "react-router-dom";

export default function StudentCard({id, name, spec, dept, sex}) {
  return (
    <div className = "flex flex-col border w-fit p-4">
      <p>Name: {name}</p>
      <p>Specialization: {spec}</p>
      <p>Department: {dept}</p>
      <p>Sex: {sex}</p>

      <Link to={`/teacher/${id}`}> View Details </Link>
    </div>
  )
}