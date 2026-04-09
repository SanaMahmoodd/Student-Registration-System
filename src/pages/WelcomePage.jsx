import { Link } from "react-router-dom";
import studentsImg from "../assets/Students.png";

function WelcomePage() {
  return (
    <div className="page page-center gradient-bg">
      <div className="welcome-card glass">
        <div className="welcome-text">
          <p className="badge">Student Portal</p>
          <h1>Welcome to Student Registration</h1>
          <p className="subtitle">
            Easily register student information, validate data, and manage
            students in one clean dashboard.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link to="/dashboard" className="main-btn">
              Go to Dashboard
            </Link>

            <Link to="/students" className="details-btn">
              View Students
            </Link>
          </div>
        </div>

        <div className="welcome-image">
          <img src={studentsImg} alt="Students studying" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;