import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import StudentModal from "../components/StudentModal";
import useLocalStorage from "../hooks/useLocalStorage";

function DashboardPage() {
  const [students, setStudents] = useLocalStorage("students", []);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="page gradient-bg">
      <Navbar />

      <div className="dashboard-wrapper">
        <div className="dashboard-header glass">
          <h1>Student Dashboard</h1>
          <p>Register students, view the student list, and open full details.</p>
        </div>

        <div className="dashboard-grid">
          <StudentForm addStudent={addStudent} />
          <StudentList students={students} onViewDetails={handleViewDetails} />
        </div>

        {isModalOpen && (
          <StudentModal student={selectedStudent} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}

export default DashboardPage;