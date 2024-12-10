import { useEffect, useState } from "react";
import FilterComponent from "./FilterComponent";
import TodoItemComponent from "./TodoItemComponent";
const TodoListComponent = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    return filter === "completed" ? todo.completed : !todo.completed;
  });

  return (
    <>
      <div>
        <FilterComponent setFilter={setFilter} />
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItemComponent key={todo.id} todo={todo} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoListComponent;
