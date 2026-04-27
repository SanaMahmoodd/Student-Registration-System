import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StudentContext = createContext();

const API_URL = "http://localhost:3001/students";
//const API_URL = "http://localhost:9999/students";


export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const addStudent = useCallback(async (newStudent) => {
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
  }, []);

  const removeStudent = useCallback(async (id) => {
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
  }, []);

  const updateStudent = useCallback(async (updatedStudent) => {
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
  }, []);

  const contextValue = useMemo(
    () => ({
      students,
      loading,
      error,
      fetchStudents,
      addStudent,
      removeStudent,
      updateStudent,
    }),
    [
      students,
      loading,
      error,
      fetchStudents,
      addStudent,
      removeStudent,
      updateStudent,
    ]
  );

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
}