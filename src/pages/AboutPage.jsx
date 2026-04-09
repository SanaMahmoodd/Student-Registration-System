import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <div className="page gradient-bg">
      <Navbar />

      <div className="dashboard-wrapper">
        <div className="page-card glass">
          <h1>About Page</h1>
          <p>
            This project is a Student Dashboard built with React. It includes
            registration, student management, routing, localStorage, search,
            filters, and details pages.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;