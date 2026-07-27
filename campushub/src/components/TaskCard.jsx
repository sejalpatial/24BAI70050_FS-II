import { useState } from "react";

function TaskCard({ task, dispatch, studentName }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description || "");
  const [prio, setPrio] = useState(task.priority || "Medium");

  function handleSave(e) {
    e.preventDefault();
    dispatch({ type: "UPDATE_TASK", payload: { ...task, title, description: desc, priority: prio } });
    setIsEdit(false);
  }

  return (
    <div style={{ border: "1px solid black", padding: "12px", marginBottom: "10px", backgroundColor: task.completed ? "#d4edda" : "#fff" }}>
      {isEdit ? (
        <form onSubmit={handleSave}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <select value={prio} onChange={(e) => setPrio(e.target.value)}>
            <option value="Low">Low</option><option value="Medium">Medium</option><option value="High">High</option>
          </select>
          <button type="submit" className="btn-success">Save</button>
          <button type="button" onClick={() => setIsEdit(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <h3>{task.title}</h3>
          {studentName && <p><strong>Hello, {studentName}</strong></p>}
          <p>Priority: {task.priority} | Status: {task.completed ? "Completed" : "Pending"}</p>
          <button onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
            {task.completed ? "Mark Pending" : "Mark Complete"}
          </button>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })} className="btn-danger">Delete</button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;