import React, { createContext, useState } from "react";
import TodoForm from "../TodoForm/Todos";

let nextId = 5;
export const TodoContext = createContext();
const TodoWithContext = () => {

    // Define initial todos and actions
    const [todos, setTodos] = useState([
        { id: 1, text: 'Todo 1' },
        { id: 2, text: 'Todo 2' },
        { id: 3, text: 'Todo 3' },
    ]);

    // Actions to manipulate todos
    const addTodo = (text) => {
        console.log("clicked");
        setTodos([
            ...todos,
            {
                text: text,
                id: nextId++,

            }
        ]);
    };

    const deleteTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
        console.log(newArray);
        setTodos(newArray)
    };

    const handleTodoStatus = (e, id) => {
        const changedArray = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: e.target.checked }
            }
        })
    }

    // Provide the context value to child components
    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, handleTodoStatus }}>
            {/* Render the child component */}
            <TodoForm />
        </TodoContext.Provider>
    );
};
export default TodoWithContext;
