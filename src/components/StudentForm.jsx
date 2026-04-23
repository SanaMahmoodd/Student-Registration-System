import { useStudents } from "../context/useStudents";
import useForm from "../hooks/useForm";

function StudentForm() {
  const { addStudent } = useStudents();

  const validateForm = (values) => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!values.course.trim()) {
      newErrors.course = "Course is required";
    }

    if (!values.gpa.trim()) {
      newErrors.gpa = "GPA is required";
    } else {
      const gpaValue = parseFloat(values.gpa);
      if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 4) {
        newErrors.gpa = "GPA must be between 0 and 4";
      }
    }

    return newErrors;
  };

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    {
      name: "",
      email: "",
      course: "",
      gpa: "",
    },
    validateForm
  );

  const onSubmit = () => {
    const newStudent = {
      // eslint-disable-next-line react-hooks/purity
      id: Date.now(),
      ...values,
    };

    addStudent(newStudent);
    resetForm();
  };

  return (
    <div className="form-card glass">
      <h2>Register Student</h2>
      <p className="subtitle">Fill in the student details below.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="student-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={values.name}
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
            value={values.email}
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
            value={values.course}
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
            value={values.gpa}
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