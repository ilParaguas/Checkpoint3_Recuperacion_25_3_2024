import { useEffect, useState } from "react";

function createTask() {
  return { name: "", description: "", dueDate: "" };
}

export default function TaskForm() {
  const [tarea, setTarea] = useState(createTask());

  function handleSubmit(event) {
    event.preventDefault();

    const task = {
      name: event.target.nombre.value,
      description: event.target.descripcion.value,
      dueDate: event.target.fecha.value,
    };

    setTarea(task);

    event.target.nombre.value = "";
    event.target.descripcion.value = "";
    event.target.fecha.value = "";
  }

  useEffect(() => {
    // if !tarea vacia
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    }).catch((err) => console.error(err));
  }, [tarea]);

  return (
    <form id="taskForm" onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="nombre"></input>
      <input type="text" name="descripcion" placeholder="descripcion"></input>
      <input type="text" name="fecha" placeholder="fecha"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
