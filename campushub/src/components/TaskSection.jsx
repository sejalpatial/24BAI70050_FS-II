import TaskList from "./TaskList";

function TaskSection({ tasks, dispatch, studentName }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Task Section</h3>
      <TaskList
        tasks={tasks}
        dispatch={dispatch}
        studentName={studentName}
      />
    </div>
  );
}

export default TaskSection;
