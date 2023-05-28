import { useContext } from "react";
import { TaskContext } from "../contex/Taskcontex";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.titulo}</h2>
      <p className="text-gray-500 text-sm">{task.descripcion}</p>

      <button className=
      "bg-red-500 px-4 py-2 rounded mt-4 hover:bg-red-400" 
      onClick={() => deleteTask(task.id)}
      >eliminar</button>
    </div>
  );
}

export default TaskCard;
