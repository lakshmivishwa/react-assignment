import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import styles from "./style";

let nextId = 5;
const Todos = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([
        {
            title: "noteBook",
            id: 1
        },
        {
            title: "pen",
            id: 2
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
        console.log(newArray);
        setTodos(newArray)

    }
    console.log(input);
    console.log(todos);


    return (
        <div style={styles.MainContainer}>
            <div style={styles.InputContainer}>
            <input type="text"
            
                style={styles.Input}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <Button buttonName="Add Item" handleClick={handleAddTodo} style={styles.Button}/>
            </div>
            <ul > {todos.map((todo, index) => {
                return <li key={todo.id} style={styles.ListContainer}>{todo.title}
                    <Button buttonName="Delete" handleClick={() => handleDeleteTodo(todo.id)} style={styles.Button}  /></li>

            })}
            </ul>

        </div>
    )
}

export default Todos;