import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StudentForm from "../components/StudentForm";
import StudentPreviewCard from "../components/StudentPreviewCard";

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    gpa: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

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

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the form errors");
      return;
    }

    setSubmittedData(formData);
    toast.success("Student registered successfully");

    setFormData({
      name: "",
      email: "",
      course: "",
      gpa: "",
    });

    setErrors({});
  };

  return (
    <div className="page gradient-bg register-layout">
      <ToastContainer />

      <div className="top-bar">
        <Link to="/" className="back-link">
          ← Back
        </Link>
      </div>

      <div className="register-wrapper">
        <StudentForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {submittedData && <StudentPreviewCard submittedData={submittedData} />}
      </div>
    </div>
  );
}

export default RegisterPage;