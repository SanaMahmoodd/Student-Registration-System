function StudentPreviewCard({ submittedData }) {
  return (
    <div className="preview-card glass">
      <h3>Preview Card</h3>
      <p>
        <strong>Name:</strong> {submittedData.name}
      </p>
      <p>
        <strong>Email:</strong> {submittedData.email}
      </p>
      <p>
        <strong>Course:</strong> {submittedData.course}
      </p>
      <p>
        <strong>GPA:</strong> {submittedData.gpa}
      </p>
    </div>
  );
}

export default StudentPreviewCard;