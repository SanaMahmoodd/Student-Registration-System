import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import useLocalStorage from "../hooks/useLocalStorage";

function StudentsPage() {
  const [students] = useLocalStorage("students", []);

  return (
    <div className="page gradient-bg">
      <Navbar />

      <div className="dashboard-wrapper">
        <div className="dashboard-header glass">
          <h1>Students List</h1>
          <p>Browse all registered students.</p>
        </div>

        <div className="table-card glass">
          {students.length === 0 ? (
            <p className="empty-text">No students registered yet.</p>
          ) : (
            <div className="table-wrapper">
              <table className="students-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>GPA</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.course}</td>
                      <td>{student.gpa}</td>
                      <td>
                        <Link
                          to={`/students/${student.id}`}
                          className="details-btn"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentsPage;