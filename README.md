# Student Dashboard & Student Registration System

A modern and clean **React application** built with **Vite** that combines a student registration workflow with a multi-page dashboard experience.

The project started as a student registration form and was later expanded into a **dashboard-based app** with routing, student management, local storage persistence, filtering, search, and student details pages — while keeping the same **glassmorphism UI design**.

---

## Features

- 📝 Student Registration Form
  - Name
  - Email
  - Course
  - GPA
- ✅ Form validation
  - Required fields
  - Email format validation
  - GPA range validation (**0 – 4**)
- 🎛️ Controlled Components using `useState`
- 🔁 One handler for multiple inputs
- 💾 Persistent storage using `localStorage`
- 📋 Student Dashboard with:
  - registration form
  - student table / list
  - filters
  - delete action
  - search by name
- 👤 Student Details page using dynamic route params
- 🧭 Multi-page navigation using **React Router**
- 🌐 Pages included:
  - Home / Welcome Page
  - Dashboard Page
  - Students Page
  - Student Details Page
  - About Page
  - 404 Not Found Page
- ✨ Active route highlighting in Navbar
- 🔎 Route params with `/students/:id`
- ↩️ Programmatic navigation using `useNavigate`
- 🧪 Unit tests for:
  - form submission
  - student table rendering
- 🎨 Glassmorphism UI
- 🌌 Animated gradient background with glow and particle effects
- 🔤 Poppins font

---

## Pages

### Welcome Page
- Intro section
- Glass card layout
- Welcome content
- Navigation buttons to main app sections

### Dashboard Page
- Registration form
- Filters
- Search input
- Student table / list
- Delete action
- Local storage integration

### Students Page
- Displays all registered students
- Links to each student's details page

### Student Details Page
- Shows full student information
- Uses route params (`/students/:id`)

### About Page
- Brief overview of the project

### 404 Page
- Displayed when the user visits an invalid route

---

## Tech Stack

- **React**
- **Vite**
- **React Router DOM**
- **Vitest**
- **React Testing Library**
- **CSS**
- **localStorage API**

---

## Project Structure

```bash
src/
│
├── assets/                     # Images
│
├── components/
│   ├── Navbar.jsx
│   ├── StudentFilters.jsx
│   ├── StudentForm.jsx
│   ├── StudentTable.jsx
│   └── tests/
│       ├── StudentForm.test.jsx
│       └── StudentTable.test.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/
│   ├── AboutPage.jsx
│   ├── DashboardPage.jsx
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   ├── StudentDetailsPage.jsx
│   ├── StudentsPage.jsx
│   └── WelcomePage.jsx
│
├── App.jsx
├── main.jsx
├── index.css
└── setupTests.js
```

---

## Setup

```bash
cd student-form-app
npm install
npm run dev
```

---

## Run Tests

```bash
npx vitest
```

or

```bash
npx vitest run
```

---

## Concepts Used

- Functional Components
- React Hooks
- Controlled Components
- Form Validation
- Dynamic Input Handling
- Component Composition
- Client-Side Routing
- Route Parameters
- Programmatic Navigation
- Shared / Lifted State
- Persistent Browser Storage
- Unit Testing

---

## Notes

- Student data is stored in the browser using **localStorage**
- Refreshing the page keeps saved students
- GPA is validated between **0 and 4**
- Email format is validated
- Navbar highlights the active route
- Student details are loaded based on the selected student ID in the URL

---

## Author

**Sana Saleh** ❤️.