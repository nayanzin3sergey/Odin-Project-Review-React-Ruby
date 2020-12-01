import React, { useState } from "react";
import Overview from "./components/Overview";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function onSubmitTask(e) {
    e.preventDefault();
    setTasks(tasks.concat(task));
    setTask("");
  }

  function removeTask(v) {
      setTasks(prevState => prevState.filter(( item ) => item !== v));
  }


  return (
    <div className="col-6 mx-auto mt-5">
      <form onSubmit={onSubmitTask}>
        <div className="form-group">
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={handleChange}
            value={task}
            type="text"
            id="taskInput"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>
      <Overview tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
