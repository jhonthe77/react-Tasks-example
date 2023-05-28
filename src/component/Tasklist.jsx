import { useContext } from "react";
import { TaskContext } from "../contex/Taskcontex";

import TaskCard from "./taskCard";
function Tasklist() {
  const { Task } = useContext(TaskContext);

  if (Task.length > 0) {
    return (
      <div className="grid grid-cols-4 gap-2 ">
       
        {Task.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    );
  } else {
    return (
      <>
        <h1>No hay tareas</h1>
      </>
    );
  }
}

export default Tasklist;
