import { useStudents } from "../context/useStudents";

function StudentTable({ students: filteredStudents, setEditStudent }) {
  const { students, removeStudent } = useStudents();

  const displayedStudents = filteredStudents || students;

  return (
    <div className="table-card glass">
      <h2>Registered Students</h2>

      {displayedStudents.length === 0 ? (
        <p className="empty-text">No students found.</p>
      ) : (
        <div className="table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>GPA</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {displayedStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.gpa}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => setEditStudent(student)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => removeStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentTable;