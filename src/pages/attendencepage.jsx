import Header from "../components/header";
import AttendanceTable from "../components/attendencetable";
import Form from "../components/attendenceform";

function AttendancePage() {
  const students = [
    { id: 1, roll: "001", name: "Alice", status: "absent" },
    { id: 2, roll: "002", name: "Bob", status: "present" },
    { id: 3, roll: "003", name: "Charlie", status: "absent" },
  ];

  return (
    <div>
      <Header />
      <h2>Student Attendance</h2>
      <AttendanceTable students={students} />
      <Form/>
    </div>
  );
}

export default AttendancePage;
