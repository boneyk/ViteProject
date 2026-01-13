import { useState } from "react";
import "./App.css";
import ToDo from "./components/Todo";
import Counter from "./components/Counter";
import SecondTask from "./components/SecondTask"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDo></ToDo>
      <Counter></Counter>
      <SecondTask></SecondTask>
    </>
  );
}

export default App;
