import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className = "font-medium text-yellow-400">
            <Link to = "/">Home | </Link>
            <Link to = "/student ">Students | </Link>
            <Link to = "/Teacher ">Teachers | </Link>
            <Link to = "/AddTeacher ">Add Teacher</Link>
        </nav>
    )
}