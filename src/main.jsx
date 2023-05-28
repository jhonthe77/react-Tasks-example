import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContexProvider } from "./contex/Taskcontex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContexProvider>
      <App />
    </TaskContexProvider>
  </React.StrictMode>
);
