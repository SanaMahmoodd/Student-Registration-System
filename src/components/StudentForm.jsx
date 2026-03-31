function StudentForm({ formData, errors, handleChange, handleSubmit }) {
  return (
    <div className="form-card glass">
      <h2>Student Registration Form</h2>
      <p className="subtitle">Fill in the student details below.</p>

      <form onSubmit={handleSubmit} className="student-form">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter student email"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label>Course</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />
          {errors.course && <span className="error-text">{errors.course}</span>}
        </div>

        <div className="input-group">
          <label>GPA</label>
          <input
            type="number"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            placeholder="Enter GPA"
            step="0.1"
          />
          {errors.gpa && <span className="error-text">{errors.gpa}</span>}
        </div>

        <button type="submit" className="main-btn full-width">
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;