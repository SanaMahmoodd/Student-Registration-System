import { useState } from "react";
import { useStudents } from "../context/useStudents";

function StudentForm() {
  const { addStudent } = useStudents();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    gpa: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    if (!formData.gpa.trim()) {
      newErrors.gpa = "GPA is required";
    } else {
      const gpaValue = parseFloat(formData.gpa);
      if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
        newErrors.gpa = "GPA must be between 0 and 4";
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const newStudent = {
      id: Date.now(),
      ...formData,
    };

    addStudent(newStudent);

    setFormData({
      name: "",
      email: "",
      course: "",
      gpa: "",
    });

    setErrors({});
  };

  return (
    <div className="form-card glass">
      <h2>Register Student</h2>
      <p className="subtitle">Fill in the student details below.</p>

      <form onSubmit={handleSubmit} className="student-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter student email"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />
          {errors.course && <span className="error-text">{errors.course}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="gpa">GPA</label>
          <input
            id="gpa"
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
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;