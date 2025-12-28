import { useState } from "react";
import Header from "../components/header";
import AttendanceTable from "../components/attendencetable";
import Form from "../components/attendenceform";

const initialStudents = [
  { id: 1, roll: "001", name: "Alice", status: "absent", remarks: "" },
  { id: 2, roll: "002", name: "Bob", status: "present", remarks: "" },
  { id: 3, roll: "003", name: "Charlie", status: "absent", remarks: "" },
];

function AttendancePage() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status: student.status === "present" ? "absent" : "present",
            }
          : student
      )
    );
  };

  const updateRemarks = (id, text) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, remarks: text } : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const presentCount = students.filter(s => s.status === "present").length;
  const absentCount = students.filter(s => s.status === "absent").length;

  return (
    <div className="p-4">
      <Header />

    

      <AttendanceTable
        students={filteredStudents}
        toggleStatus={toggleStatus}
        updateRemarks={updateRemarks}
      />
        <Form
        search={search}
        setSearch={setSearch}
        present={presentCount}
        absent={absentCount}
        total={students.length}
      />
    </div>
  );
}

export default AttendancePage;
