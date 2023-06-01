import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import styles from "./style";

let nextId = 5;
const Todos = () => {

    const [input, setInput] = useState("");
    const [checked, setChecked] = useState(false);
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
        setTodos([
            ...todos,
            {
                title: input,
                id: nextId++,

            }
        ]);
    }

    const handleDeleteTodo = (id) => {
        const newArray = todos.filter((todo) => todo.id !== id);
        setTodos(newArray)

    }
    const handleTodoStatus = (e, id) => {
        const changedArray = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: e.target.checked }
            }
        })
    }

    return (
        <>
            <div style={styles.MainContainer}>
                <h2 style={styles.Title}> Todo list using with useState</h2>
                <div style={styles.InputContainer}>
                    <input type="text"
                        style={styles.Input}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    ></input>
                    <Button buttonName="Add Item" handleClick={handleAddTodo} style={styles.Button} />
                </div>
                <div style={styles.FilterContainer}>
                    {/* <Button buttonName="Add Item" handleClick={handleAddTodo} style={styles.Button} /> */}
                    <span>Filter by priority</span>
                    <input type="text"
                        style={styles.Input}
                    >

                    </input>
                </div>

                <ul >
                    {todos.map((todo, index) => {
                        return <li key={todo.id} style={styles.ListContainer}>
                            <input
                                type="checkbox"
                                checked={todos.complete}
                                onChange={(e) => handleTodoStatus(e, todo.id)} />{todo.title}
                            <Button buttonName="Delete" handleClick={() => handleDeleteTodo(todo.id)} style={styles.TodosButton} /></li>;

                    })}
                </ul>

            </div></>
    )
}

export default Todos;
