import { useState } from "react";
import "./App.css";
import ToDo from "./components/Todo";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDo></ToDo>
      <Counter></Counter>
    </>
  );
}

export default App;
