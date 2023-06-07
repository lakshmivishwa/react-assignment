import React, { useState } from "react";
import Button from "../../Button/Button";
import styles from "./style";
import { useTodos } from "../../../zustandStore";
import { useInput } from "../../../zustandStore";
const TodosWithZustand = () => {

    const [input, setInput] = useState("");

    const todos = useTodos((state) => state.todos);
    const addItem = useTodos((state) => state.addTodo)
    const deleteTodo = useTodos((state) => state.deleteTodo);

    console.log(todos);
    console.log(addItem)

    const addTodos = () => {
        addItem(input)
        setInput("");
    }

    const deleteTodoList = (id) => {
        deleteTodo(id)
    }

    return (
        <div style={styles.MainContainer}>
            <h2 style={styles.Title}> Todo list using with Zustand</h2>
            <div style={styles.InputContainer}>
                <input
                    type="text"
                    placeholder="Enter todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button buttonName="Add Item" style={styles.Button} handleClick={addTodos} />
            </div>
            <ul >
                {todos.map((todo, index) => {
                    return (
                        <li style={styles.ListContainer}>
                            <input
                                type="checkbox"
                            />{todo.title}
                            <Button buttonName="Delete" style={styles.TodosButton} handleClick={() => deleteTodoList(todo.id)} /></li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodosWithZustand;
