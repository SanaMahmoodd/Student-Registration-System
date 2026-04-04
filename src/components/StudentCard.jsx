function StudentCard({ student, onViewDetails }) {
  return (
    <div className="student-card">
      <div>
        <h3>{student.name}</h3>
        <p>{student.course}</p>
      </div>

      <button
        className="details-btn"
        onClick={() => onViewDetails(student)}
      >
        View Details
      </button>
    </div>
  );
}

export default StudentCard;