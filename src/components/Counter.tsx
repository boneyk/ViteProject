import { observer } from "mobx-react-lite";
import { taskStore } from "../store/TaskStore";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

const ToDo = observer(() => {
  let [count, setCount] = useState(0);
  return (
    <>
      <Typography variant="body2">{count}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Добавить
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Убавить
      </Button>
    </>
  );
});

export default ToDo;
