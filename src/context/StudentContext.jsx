import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StudentContext = createContext();

const API_URL = "http://localhost:3001/students";

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = async (newStudent) => {
    try {
      setError("");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const savedStudent = await response.json();
      setStudents((prev) => [...prev, savedStudent]);
    } catch (err) {
      setError(err.message);
    }
  };

  const removeStudent = async (id) => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      setStudents((prev) =>
        prev.filter((student) => String(student.id) !== String(id))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const updateStudent = async (updatedStudent) => {
    try {
      setError("");

      const response = await fetch(`${API_URL}/${updatedStudent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });

      if (!response.ok) {
        throw new Error("Failed to update student");
      }

      const savedStudent = await response.json();

      setStudents((prev) =>
        prev.map((student) =>
          String(student.id) === String(savedStudent.id)
            ? savedStudent
            : student
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        loading,
        error,
        fetchStudents,
        addStudent,
        removeStudent,
        updateStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}