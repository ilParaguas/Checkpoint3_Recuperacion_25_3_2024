import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTaskList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <TaskForm />
      <TaskList taskList={taskList} />
    </div>
  );
}
