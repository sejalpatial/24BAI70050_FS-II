import { useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";

import useLocalStorage from "./hooks/useLocalStorage";
import taskReducer from "./reducers/taskReducer";

const initialTasks = [
  {
    id: 1,
    title: "Complete Full Stack Assignment",
    description: "Build CampusHub React application with custom hooks and useReducer",
    priority: "High",
    completed: false,
    deadline: "2026-07-30"
  },
  {
    id: 2,
    title: "Review React Hooks Documentation",
    description: "Study useState, useReducer, useEffect, and custom hook patterns",
    priority: "Medium",
    completed: true,
    deadline: "2026-07-28"
  }
];

function App() {
  const [user, setUser] = useLocalStorage("user", null);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", initialTasks);

  const [tasks, dispatch] = useReducer(taskReducer, storedTasks || []);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              user={user}
              tasks={tasks}
              dispatch={dispatch}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          }
        />

        <Route
          path="/tasks"
          element={
            <Tasks
              user={user}
              tasks={tasks}
              dispatch={dispatch}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          }
        />

        <Route
          path="/resources"
          element={
            <Resources
              theme={theme}
              toggleTheme={toggleTheme}
            />
          }
        />

        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              setUser={setUser}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;