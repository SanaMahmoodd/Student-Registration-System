import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// eslint-disable-next-line react-refresh/only-export-components
export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useLocalStorage("students", []);

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
}