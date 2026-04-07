import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StudentTable from "../StudentTable";

describe("StudentTable", () => {
  it("renders student rows", () => {
    const students = [
      {
        id: 1,
        name: "Salma",
        email: "salma@test.com",
        course: "React",
        gpa: "3.9",
      },
    ];

    render(<StudentTable students={students} onDelete={() => {}} />);

    expect(screen.getByText("Salma")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });
});