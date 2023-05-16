import React, { useContext, useState } from "react";
import Button from "../../Button/Button";
import styles from "./style";

// let nextId = 5;

const TodoForm = () => {

    const [input, setInput] = useState("");
    console.log(input);
    const [todos, setTodos] = useState([
        {
            title: "noteBook",
            id: 1,
            complete: false
        },
        {
            title: "pen",
            id: 2,
            complete: false
        }
    ]);

    const handleAddTodo = () => {
        console.log("clicked");
        // dispatch({ type: "ADD_TODO", payload: input });
    };

    const handleDeleteTodo = id => {
        console.log(id);
        // dispatch({ type: "DELETE_TODO", payload: id });
    };

    const handleTodoStatus = (e, id) => {
        console.log(e);
        console.log(id);
        // dispatch({ type: "TOGGLE_TODO", payload: id });
    };


    return (
        <div style={styles.MainContainer}>
            <h2 style={styles.Title}>Todo list using useContext</h2>
            <div style={styles.InputContainer}>
                <input
                    type="text"
                    style={styles.Input}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                ></input>
                <Button buttonName="Add Item" handleClick={handleAddTodo} style={styles.Button} />
            </div>
            <div style={styles.FilterContainer}>
                <span>Filter by priority</span>
                <input type="text" style={styles.Input} />
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id} style={styles.ListContainer}>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={e => handleTodoStatus(e, todo.id)}
                        />
                        {todo.title}
                        <Button
                            buttonName="Delete"
                            handleClick={() => handleDeleteTodo(todo.id)}
                            style={styles.TodosButton}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoForm;