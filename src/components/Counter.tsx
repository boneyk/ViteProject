import { observer } from "mobx-react-lite";
import { taskStore } from "../store/TaskStore";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const ToDo = observer(() => {
  let [count, setCount] = useState(() => {
    const saved = localStorage.getItem("value");
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {}, [count]);
  return (
    <>
      <Typography variant="body2">{localStorage.getItem("value")}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          setCount(count + 1);
          localStorage.setItem("value", `${count}`);
          console.log("в localStorage:", count);
        }}
      >
        Добавить
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setCount(count - 1);
          localStorage.setItem("value", `${count}`);
          console.log("в localStorage:", count);
        }}
      >
        Убавить
      </Button>
    </>
  );
});

export default ToDo;
