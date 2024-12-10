import { useState } from "react";
import TodoFormComponent from "./components/TodoFormComponent";
import TodoListComponent from "./components/TodoListComponent";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoListComponent todos={todos} setTodos={setTodos} />
      <TodoFormComponent setTodos={setTodos} />
    </div>
  );
}
