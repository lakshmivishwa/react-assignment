import React, { useContext } from "react";
import Button from "../../Button/Button";
import styles from "./style";
import { TodoContext } from "../TodoContext/TodoContext";
import { useState } from "react";

const TodoForm = () => {
    // Consume the context using useContext hook
    const { addTodo, todos, deleteTodo, handleTodoStatus } = useContext(TodoContext);

    const [input, setInput] = useState("");
    console.log(todos);
    console.log(deleteTodo);

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(input);
        setInput("");
    };
    console.log(input);
    return (
        <div style={styles.MainContainer}>
            <h2 style={styles.Title}> Todo list using with useContext</h2>
            <div style={styles.InputContainer}>
                <input
                    type="text"
                    placeholder="Enter todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button buttonName="Add Item" handleClick={handleSubmit} style={styles.Button} />
            </div>
            <ul >
                {todos.map((todo, index) => {
                    return (
                        <li key={todo.id} style={styles.ListContainer}>
                            <input
                                type="checkbox"
                                checked={todos.complete}
                                onChange={(e) => handleTodoStatus(e, todo.id)}
                            />{todo.text}
                            <Button buttonName="Delete" handleClick={() => deleteTodo(todo.id)} style={styles.TodosButton} /></li>);
                })}
            </ul>
        </div>
    );
};

export default TodoForm;
