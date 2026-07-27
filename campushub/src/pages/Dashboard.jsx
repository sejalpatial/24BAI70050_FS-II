import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardComponent from "../components/Dashboard";

function Dashboard({ user, tasks, dispatch, theme, toggleTheme }) {
  const studentName = user?.name || "Akash";

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-layout">
        <Sidebar />
        <main className="page-content">
          <DashboardComponent
            studentName={studentName}
            tasks={tasks}
            dispatch={dispatch}
          />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;