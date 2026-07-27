import { Link, useNavigate } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1976d2",
        padding: "15px",
        color: "white"
      }}
    >
      <h2 style={{ margin: 0 }}>CampusHub</h2>

      <div>
        <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>
          Dashboard
        </Link>
        <Link to="/tasks" style={{ color: "white", marginRight: "15px" }}>
          Tasks
        </Link>
        <Link to="/resources" style={{ color: "white", marginRight: "15px" }}>
          Resources
        </Link>
        <Link to="/profile" style={{ color: "white", marginRight: "15px" }}>
          Profile
        </Link>

        {toggleTheme && (
          <button onClick={toggleTheme} className="btn-secondary" style={{ marginRight: "10px" }}>
            Theme: {theme === "dark" ? "Dark" : "Light"}
          </button>
        )}

        <button onClick={logout} className="btn-danger">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;