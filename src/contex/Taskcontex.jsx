import { createContext } from "react"   
import { Task as data } from "../data/Task";
import { useState, useEffect } from "react";

export const TaskContext = createContext()


 export function TaskContexProvider(props) {


     const [Task, setTask] = useState([]);

     useEffect(() => {
       setTask(data);
     }, []);
  

     function createTask(task) {
       setTask([
         ...Task,
         {
           id: Task.length + 1,
           titulo: task.title,
           descripcion: task.description,
         },
       ]);
     }

     function deleteTask(taskid) {
       setTask(Task.filter((task) => task.id !== taskid));
     }

  return (
   
    <TaskContext.Provider value={{
        Task,
        deleteTask,
         createTask
    // eslint-disable-next-line react/prop-types
    }}>{props.children}</TaskContext.Provider>
  )
}

