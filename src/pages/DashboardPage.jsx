import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";
import { useStudents } from "../context/useStudents";

function DashboardPage() {
  const { students, loading, error } = useStudents();
  const [editStudent, setEditStudent] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");
  const [gpaFilter, setGpaFilter] = useState("All");

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
          <p>Register students, search, filter, and manage records.</p>
        </div>

        {loading && <p className="status-text">Loading students...</p>}
        {error && <p className="error-text">{error}</p>}

        <div className="dashboard-grid">
          <StudentForm
            editStudent={editStudent}
            setEditStudent={setEditStudent}
          />

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
              setEditStudent={setEditStudent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;