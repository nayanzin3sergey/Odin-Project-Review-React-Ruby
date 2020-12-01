import React from "react";

function Overview(props) {
  const { tasks, removeTask } = props;
  console.log(tasks)
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <div key={index}>
            <p>
              #{index + 1} {task}
            </p>
            <button onClick={() => removeTask(index)} className="btn btn-danger">Delete Task</button>
          </div>
        );
      })}
    </>
  );
}
export default Overview;
