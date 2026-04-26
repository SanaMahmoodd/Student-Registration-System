import React from "react";
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
                <StudentRow
                  key={student.id}
                  student={student}
                  onEdit={setEditStudent}
                  onDelete={removeStudent}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const StudentRow = React.memo(function StudentRow({ student, onEdit, onDelete }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.course}</td>
      <td>{student.gpa}</td>
      <td>
        <button className="edit-btn" onClick={() => onEdit(student)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(student.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
});

export default React.memo(StudentTable);