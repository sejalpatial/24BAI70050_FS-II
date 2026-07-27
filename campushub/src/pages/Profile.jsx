import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile({ user, setUser, theme, toggleTheme }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  function handleSave(e) {
    e.preventDefault();
    const updated = { name, email };
    localStorage.setItem("user", JSON.stringify(updated));
    if (setUser) setUser(updated);
    setEdit(false);
  }

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-layout">
        <Sidebar />
        <main className="page-content">
          <h1>Student Profile</h1>
          <div className="container-box">
            {edit ? (
              <form onSubmit={handleSave}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEdit(false)}>Cancel</button>
              </form>
            ) : (
              <div>
                <h2>Name: {user?.name || "N/A"}</h2>
                <h3>Email: {user?.email || "N/A"}</h3>
                <button onClick={() => setEdit(true)}>Edit</button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;