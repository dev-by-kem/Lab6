import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherData from "../data/teachers.json";

export default function AddTeacher({}) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [spec, setSpec] = useState("");
  const [dept, setDept] = useState("");
  const [sex, setSex] = useState("");

  return (
    <div>
      <h1 className="font-serif font-semibold">Add Teacher</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newTeacher = {
            id: TeacherData.length + 1,
            name: name,
            spec: spec,
            dept: dept,
            sex: sex
          };
          TeacherData.push(newTeacher);
          setName("");
          setSpec("");
          setDept("");
          setSex("");

          navigate("/Teacher");
        }}
      >
        <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        </div>

        <div>
        <label htmlFor="spec">Specialization:</label>
        <select
          id="spec"
          name="spec"
          value={spec}
          required
          onChange={(e) => setSpec(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="Programming">Programming</option>
          <option value="PERL">PERL</option>
          <option value="Database">Database</option>
          <option value="Web-dev">Web-dev</option>
          <option value="AI">AI</option>
        </select>
        <br />
        </div>

        <div>
        <label htmlFor="dept">Department:</label>
        <select
          id="dept"
          name="dept"
          value={dept}
          required
          onChange={(e) => setDept(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="DIT">DIT</option>
          <option value="DIET">DIET</option>
          <option value="CAS">CAS</option>
        </select>
        <br />
        </div>

        <div>
        <label htmlFor="sex">Sex:</label>
        <select
          id="sex"
          name="sex"
          value={sex}
          required
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="">Select Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        </div>

        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
}
