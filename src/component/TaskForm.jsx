import { useState, useContext } from "react";
import { TaskContext } from "../contex/Taskcontex";

function TaskFrom() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSutmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
    };

    if (newTask.title !== "" && newTask.description !== "") {
      createTask(newTask);
    }
    setDescription("");
    setTitle("");
  };
  return (
    <div className="max-w-md mx-auto bg-blue-500 p-2 mb-4">
      <form onSubmit={handleSutmit} className="  p-4">
        <h1>Crea Tu tarea</h1>
        <input
          type="text"
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-200 w-full p-3 mb-2"
          autoFocus
        />
        <textarea
          className="bg-slate-200 w-full p-3 mb-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-2 py-2 rounded-sm text-white">Agregar</button>
      </form>
    </div>
  );
}

export default TaskFrom;
