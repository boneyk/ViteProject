import { useState } from "react";
import "./App.css";
import ToDo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDo task={{title:"Сделать дз", desc:"лалала", doFlag:false}}></ToDo>
      <ToDo task= {{title:"Сделать дз2", desc:"лалала2", doFlag:false}}></ToDo>
    </>
  );
}

export default App;
