import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar glass">
      <h2 className="logo">Student Dashboard</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;