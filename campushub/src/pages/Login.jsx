import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../utils/validation";

function Login({ setUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    const err = validateLogin(email, password, name);
    if (err) return setError(err);

    const user = { name: name.trim(), email: email.trim() };
    localStorage.setItem("user", JSON.stringify(user));
    if (setUser) setUser(user);
    navigate("/dashboard");
  }

  return (
    <div style={{ padding: "30px", maxWidth: "350px", margin: "40px auto" }} className="container-box">
      <h2>CampusHub Login</h2>
      {error && <p className="error-text">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" style={{ width: "100%", marginTop: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;