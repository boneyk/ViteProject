import { useState } from "react";
import { observer } from "mobx-react-lite";
import { taskStore } from "../store/TaskStore";

const ToDo = observer(() => {
  return (
    <>
      {taskStore.tasks.map((task, ind) => {
        return (
          <div
            key={ind}
            onClick={() => taskStore.toggleTask(ind)}
            style={{
              width: "400px",
              height: "120px",
              border: "2px solid black",
              background: "grey",
              cursor: "pointer",
              margin: "10px"
            }}
          >
            <h3 style={{ textDecoration: task.doFlag ? "line-through" : "none" }}>
              {task.title}
            </h3>
            <p>
              {task.desc}
            </p>
          </div>);
      })}
    </>
  );
});

export default ToDo;
