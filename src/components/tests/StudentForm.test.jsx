import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import StudentForm from "../StudentForm";

describe("StudentForm", () => {
  it("renders form fields", () => {
    render(<StudentForm addStudent={() => {}} />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/course/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gpa/i)).toBeInTheDocument();
  });

  it("submits valid form data", async () => {
    const user = userEvent.setup();
    const addStudent = vi.fn();

    render(<StudentForm addStudent={addStudent} />);

    await user.type(screen.getByLabelText(/name/i), "Salma");
    await user.type(screen.getByLabelText(/email/i), "salma@test.com");
    await user.type(screen.getByLabelText(/course/i), "React");
    await user.type(screen.getByLabelText(/gpa/i), "3.8");

    await user.click(screen.getByRole("button", { name: /add student/i }));

    expect(addStudent).toHaveBeenCalledTimes(1);
  });
});