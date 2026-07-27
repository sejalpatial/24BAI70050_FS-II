import TaskCard from "./TaskCard";

function TaskList({ tasks, dispatch, studentName }) {
  if (!tasks || tasks.length === 0) {
    return <h3>No Tasks Available</h3>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          dispatch={dispatch}
          studentName={studentName}
        />
      ))}
    </div>
  );
}

export default TaskList;