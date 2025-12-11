import { observer } from "mobx-react-lite";
import { taskStore } from "../store/TaskStore";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ToDo = observer(() => {
  return (
    <>
      {taskStore.tasks.map((task, ind) => (
        <Card
          sx={{
            maxWidth: 345,
            border: "2px solid black",
            cursor: "pointer",
            margin: "10px"
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
          </CardContent>
        </Card>
      ))}
    </>
  );
});

export default ToDo;
