import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useStudents } from "../context/useStudents";

function StudentDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students } = useStudents();

  const student = students.find((item) => item.id === Number(id));

  return (
    <div className="page gradient-bg">
      <Navbar />

      <div className="dashboard-wrapper">
        <div className="page-card glass">
          {!student ? (
            <>
              <h1>Student Not Found</h1>
              <p>No student found with this ID.</p>
              <button className="main-btn" onClick={() => navigate("/students")}>
                Back to Students
              </button>
            </>
          ) : (
            <>
              <h1>Student Details</h1>

              <div className="details-box">
                <p><strong>ID:</strong> {student.id}</p>
                <p><strong>Name:</strong> {student.name}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>GPA:</strong> {student.gpa}</p>
              </div>

              <button className="main-btn" onClick={() => navigate("/students")}>
                Back to Students
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDetailsPage;