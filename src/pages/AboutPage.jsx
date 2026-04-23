import Navbar from "../components/Navbar";
import useFetch from "../hooks/useFetch";

function AboutPage() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/users"
  );

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

          <div style={{ marginTop: "20px" }}>
            <h3>Sample Students (API)</h3>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
              <ul style={{ marginTop: "10px" }}>
                {data.users.slice(0, 3).map((user) => (
                  <li key={user.id}>
                    {user.firstName} {user.lastName} - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;