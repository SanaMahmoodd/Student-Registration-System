import StudentCard from "./StudentCard";

function StudentList({ students, onViewDetails }) {
  return (
    <div className="list-card glass">
      <h2>Registered Students</h2>
      <p className="subtitle">View all students below.</p>

      {students.length === 0 ? (
        <p className="empty-text">No students registered yet.</p>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;