import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Students from "./pages/Students"
import StudentDetails from "./pages/StudentDetails"
import TeacherDetails from "./pages/TeacherDetails"
import Teachers from "./pages/Teachers"
import AddTeacher from "./pages/AddTeacher"
import { useEffect, useState } from "react";

export default function App() {
    const [students, setStudent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/student" element = {<Students students={students} />}></Route>
        <Route path = "/student/:id" element = {<StudentDetails/>}></Route>
        <Route path = "/teacher" element = {<Teachers/>}></Route>
        <Route path = "/teacher/:id" element = {<TeacherDetails/>}></Route>
        <Route path = "/addteacher" element = {<AddTeacher/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
