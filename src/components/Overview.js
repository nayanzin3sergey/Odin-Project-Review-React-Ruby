import React from "react";

function Overview(props) {
  const { tasks, removeTask } = props;
  console.log(tasks)
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <>
            <p key={index}>
              #{index + 1} {task}
            </p>
            <button onClick={removeTask}>Delete Task</button>
          </>
        );
      })}
    </>
  );
}
export default Overview;
