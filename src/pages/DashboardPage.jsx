import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";
import useLocalStorage from "../hooks/useLocalStorage";

function DashboardPage() {
  const [students, setStudents] = useLocalStorage("students", []);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [gpaFilter, setGpaFilter] = useState("All");

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const courses = useMemo(() => {
    const uniqueCourses = [...new Set(students.map((student) => student.course))];
    return ["All", ...uniqueCourses];
  }, [students]);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = student.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCourse =
        courseFilter === "All" || student.course === courseFilter;

      let matchesGpa = true;

      if (gpaFilter === "High") {
        matchesGpa = Number(student.gpa) >= 3.5;
      } else if (gpaFilter === "Medium") {
        matchesGpa = Number(student.gpa) >= 2 && Number(student.gpa) < 3.5;
      } else if (gpaFilter === "Low") {
        matchesGpa = Number(student.gpa) < 2;
      }

      return matchesSearch && matchesCourse && matchesGpa;
    });
  }, [students, searchTerm, courseFilter, gpaFilter]);

  return (
    <div className="page gradient-bg">
      <Navbar />

      <div className="dashboard-wrapper">
        <div className="dashboard-header glass">
          <h1>Student Dashboard</h1>
          <p>Register students, filter them, search by name, and manage records.</p>
        </div>

        <div className="dashboard-grid">
          <StudentForm addStudent={addStudent} />

          <div className="right-panel">
            <StudentFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              courseFilter={courseFilter}
              setCourseFilter={setCourseFilter}
              gpaFilter={gpaFilter}
              setGpaFilter={setGpaFilter}
              courses={courses}
            />

            <StudentTable
              students={filteredStudents}
              onDelete={deleteStudent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;