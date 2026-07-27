import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "180px",
        minHeight: "100vh",
        backgroundColor: "#e0e0e0",
        padding: "15px",
        boxSizing: "border-box"
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "12px" }}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link to="/resources">Resources</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;