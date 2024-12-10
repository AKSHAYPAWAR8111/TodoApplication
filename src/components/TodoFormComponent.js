import { useState } from "react";

const TodoFormComponent = ({setTodos}) => {
const [description , setDescription] = useState("");
const [dueDate , setDueDate] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
        id:Date.now(),
        description, dueDate, completed:false
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
    setDescription('');
    setDueDate('');
};

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  required/>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}  required/>


            <button type="submit">Add Todo</button>
        </form>
    )

    

}

export default TodoFormComponent;