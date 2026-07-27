import TaskSection from "./TaskSection";

function DashboardComponent({ studentName, tasks = [], dispatch }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {studentName || "Akash"}</h2>

      <hr />

      <div className="stats-grid">
        <div className="stat-box">
          <h3>Total Tasks</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>{totalTasks}</p>
        </div>

        <div className="stat-box">
          <h3>Completed Tasks</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "green" }}>{completedTasks}</p>
        </div>

        <div className="stat-box">
          <h3>Pending Tasks</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "orange" }}>{pendingTasks}</p>
        </div>
      </div>

     

      <TaskSection
        tasks={tasks}
        dispatch={dispatch}
        studentName={studentName}
      />
    </div>
  );
}

export default DashboardComponent;
