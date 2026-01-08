import { useState } from "react";
import Header from "../components/header";
import AttendanceTable from "../components/attendencetable";
import Form from "../components/attendenceform";

const initialStudents = [
  { id: 1, roll: "001", name: "Alice", status: "absent", remarks: "" },
  { id: 2, roll: "002", name: "Bob", status: "present", remarks: "" },
];

function AttendancePage() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const addAttendance = ({ studentName, date }) => {
    const newStudent = {
      id: Date.now(),
      roll: String(students.length + 1).padStart(3, "0"),
      name: studentName,
      date,
      status: "absent",
      remarks: "",
    };

    setStudents((prev) => [...prev, newStudent]);
  };

  const toggleStatus = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "present" ? "absent" : "present" }
          : s
      )
    );
  };

  const updateRemarks = (id, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, remarks: value } : s))
    );
  };

  return (
    <div className="p-6 space-y-6">
      <Header addAttendance={addAttendance} />

      <AttendanceTable
        students={students}
        toggleStatus={toggleStatus}
        updateRemarks={updateRemarks}
      />

      <Form
        search={search}
        setSearch={setSearch}
        present={students.filter(s => s.status === "present").length}
        absent={students.filter(s => s.status === "absent").length}
        total={students.length}
      />
    </div>
  );
}

export default AttendancePage;
