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
import { FC, useState } from "react"; // Добавьте импорт FC

export const SecondTask: FC = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  return (
    <>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "green",
        }}
        onMouseMove={(event) => {
          event.currentTarget.style.backgroundColor = "red";
          setCoordinates({
            x: event.clientX - event.currentTarget.getBoundingClientRect().x,
            y: event.clientY - event.currentTarget.getBoundingClientRect().y,
          });
        }}
        onMouseOut={(event) => {
          event.currentTarget.style.backgroundColor = "blue";
        }}
      ></div>
      <Typography variant="h6" style={{ color: "white" }}>
        {`X: ${coordinates.x}, Y: ${coordinates.y}`}
      </Typography>
    </>
  );
};

export default SecondTask;
