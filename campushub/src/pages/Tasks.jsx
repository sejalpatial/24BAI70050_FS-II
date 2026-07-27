import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import { validateTask } from "../utils/validation";

function Tasks({ user, tasks = [], dispatch, theme, toggleTheme }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [prio, setPrio] = useState("all");
  const [sort, setSort] = useState("none");

  function handleAddTask(e) {
    e.preventDefault();
    const err = validateTask(title, priority);
    if (err) return setError(err);

    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), title, description, priority, deadline, completed: false }
    });

    setTitle(""); setDescription(""); setDeadline(""); setError("");
  }

  let list = tasks.filter((t) =>
    (t.title.toLowerCase().includes(search.toLowerCase()) || (t.description && t.description.toLowerCase().includes(search.toLowerCase()))) &&
    (status === "all" ? true : status === "completed" ? t.completed : !t.completed) &&
    (prio === "all" ? true : t.priority?.toLowerCase() === prio.toLowerCase())
  );

  if (sort === "asc") list.sort((a, b) => new Date(a.deadline || "9999") - new Date(b.deadline || "9999"));
  if (sort === "desc") list.sort((a, b) => new Date(b.deadline || "0000") - new Date(a.deadline || "0000"));

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="main-layout">
        <Sidebar />
        <main className="page-content">
          <h1>Task Manager</h1>
          <div className="container-box">
            <h3>Add New Task</h3>
            {error && <p className="error-text">{error}</p>}
            <form onSubmit={handleAddTask}>
              <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option><option value="Medium">Medium</option><option value="High">High</option>
              </select>
              <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
              <button type="submit">Add Task</button>
            </form>
          </div>

          <div className="controls-bar">
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All Status</option><option value="completed">Completed</option><option value="pending">Pending</option>
            </select>
            <select value={prio} onChange={(e) => setPrio(e.target.value)}>
              <option value="all">All Priority</option><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="none">Sort: Default</option><option value="asc">Earliest First</option><option value="desc">Latest First</option>
            </select>
          </div>

          <TaskList tasks={list} dispatch={dispatch} studentName={user?.name} />
        </main>
      </div>
    </div>
  );
}

export default Tasks;