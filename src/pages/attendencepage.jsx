import { useState } from "react";
import AttendanceTable from "../components/attendencetable";
import Header from "../components/header";
import Form from "../components/attendenceform";

const initialStudents = [
  { id: 1, roll: "001", name: "Alice Johnson", status: "present", remarks: "" },
  { id: 2, roll: "002", name: "Bob Smith", status: "absent", remarks: "Sick leave" },
  { id: 3, roll: "003", name: "Charlie Brown", status: "present", remarks: "" },
];

function AttendancePage() {
  const [students, setStudents] = useState(initialStudents);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h2>Student Attendance</h2>
        <AttendanceTable students={students} />
      </div>
      <Form />
    </>
  );
}

export default AttendancePage;
