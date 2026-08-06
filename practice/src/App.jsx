import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [Theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ Theme, setTheme }}>
      <div
        style={{
          backgroundColor: Theme === "dark" ? "black" : "white",
          color: Theme === "dark" ? "white" : "black",
          minHeight: "100vh",
        }}
      >
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;