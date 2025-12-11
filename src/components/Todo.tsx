import { observer } from "mobx-react-lite";
import { taskStore } from "../store/TaskStore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { filledInputClasses } from "@mui/material/FilledInput";
import { inputBaseClasses } from "@mui/material/InputBase";

const ToDo = observer(() => {
  return (
    <>
      {taskStore.tasks.map((task, ind) => (
        <Card
          sx={{
            maxWidth: 345,
            border: "2px solid black",
            cursor: "pointer",
            margin: "10px",
          }}
          key={ind}
          onClick={() => taskStore.toggleTask(ind)}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ textDecoration: task.doFlag ? "line-through" : "none" }}
            >
              {task.title}
            </Typography>
            <Typography variant="body2">{task.desc}</Typography>
            <Button
              variant="contained"
              style={{ marginTop: "10px" }}
              onClick={(even) => {
                even.stopPropagation();
                taskStore.deleteTask(ind);
              }}
            >
              Удалить
            </Button>
          </CardContent>
        </Card>
      ))}
      <TextField
        id="filled-suffix-shrink"
        label="Title"
        helperText="Please enter your task title"
        variant="filled"
        onChange={(e) => taskStore.setTitle(e.target.value)}
      />
      <TextField
        id="filled-suffix-shrink"
        label="Description"
        helperText="Please enter your task describtion"
        variant="filled"
        onChange={(e) => taskStore.setDesc(e.target.value)}
      />
      <Button variant="outlined" onClick={() => {taskStore.addTask()}}>
        Добавить
      </Button>
    </>
  );
});

export default ToDo;
