export default function TaskList({ taskList }) {
  console.log(taskList);

  if (!taskList || taskList.length === 0) {
    return <p>Loading</p>;
  }

  return (
    <ul>
      {taskList.map((element) => (
        <li key={element.id}>
          <div> {element.name}</div>
          <div> {element.description}</div>
          <div> {element.dueDate}</div>
          <button type="checkbox" value={element.completed}>
            Completed
          </button>
        </li>
      ))}
    </ul>
  );
}
