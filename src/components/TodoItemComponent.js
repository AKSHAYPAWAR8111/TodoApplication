import { useState } from "react";

const TodoItemComponent = ({ todo, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setnewDescription] = useState(todo.description);
  const [newDueDate, setnewDueDate] = useState(todo.dueDate);

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  const handleToggleCompletion = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !todo.completed } : t
      )
    );
  };

  const handleSaveEdit = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id
          ? { ...t, description: newDescription, dueDate: newDueDate }
          : t
      )
    );
    setIsEditing(false);
  };
  return;
  <li>
    {isEditing ? (
      <div>
        <input
          type="date"
          value={newDescription}
          onChange={(e) => setnewDescription(e.target.value)}
        />
        <input
          type="date"
          value={newDueDate}
          onChange={(e) => setnewDueDate(e.target.value)}
        />
        <button onClick={{ handleSaveEdit }}>Save</button>
      </div>
    ) : (
      <div>
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.description} - {todo.dueDate}
        </span>

        <button onClick={handdleToggleCompletion}>{todo.completed ? 'Mark as pending' : 'mark as completed'}</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={()=> setIsEditing(true)}>Edit</button>
      </div>
    )}
  </li>;
};
export default TodoItemComponent;
