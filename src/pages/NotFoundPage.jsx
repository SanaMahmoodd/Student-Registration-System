import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="page gradient-bg">
      <Navbar />

      <div className="dashboard-wrapper">
        <div className="page-card glass">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>

          <button className="main-btn" onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;