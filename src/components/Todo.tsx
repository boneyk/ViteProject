import { useState } from "react";

type Task = {
  title: string,
  desc: string,
  doFlag: boolean
};

function ToDo( { task }: { task: Task } ) {
  const [changeFlag, setChangeFlag] = useState < boolean > (false);
  return (
    <>
      <div
        onClick={() => setChangeFlag(!changeFlag)}
        style={{
          width: "200px",
          height: "100px",
          border: "2px solid black",
          background: "grey",
          cursor: "pointer",
        }}
      >
        <h3 style={{ textDecoration: changeFlag ? "line-through" : "none" }}>
          {task.title}
        </h3>
        <p>{task.desc}</p>
      </div>
    </>
  );
}
export default ToDo;
