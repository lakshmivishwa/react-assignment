import React from "react";
import Button from "../../Button/Button";
import styles from "./style";

import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    console.log(TodoForm);

    const [input, setInput] = useState("");
    // console.log(todos);
    // console.log(deleteTodo);

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
                <Button buttonName="Add Item"
                    handleClick={handleSubmit}
                    style={styles.Button} />
            </div>

        </div>

    );
};

export default TodoForm;
