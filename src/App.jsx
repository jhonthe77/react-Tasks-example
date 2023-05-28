import "./App.css";
import Tasklist from "./component/Tasklist";
import TaskFrom from "./component/TaskForm";

function App() {
  return (
    <main className="bg-yellow-500 h-screen mx-auto">
      <div className="container  p-2">
        <TaskFrom />
        <Tasklist />
      </div>
    </main>
  );
}

export default App;
