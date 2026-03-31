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
            Easily register student information, validate data, and preview the submitted details in a clean and modern interface.
          </p>

          <Link to="/register" className="main-btn">
            Go to Registration
          </Link>
        </div>

        <div className="welcome-image">
          <img src={studentsImg} alt="Students studying" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;