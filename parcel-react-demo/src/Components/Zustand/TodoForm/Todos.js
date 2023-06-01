import React from "react";
import Button from "../../Button/Button";
import styles from "./style";
import { useTodos } from "../../../zustandStore";
import { useInput } from "../../../zustandStore";
const TodosWithZustand = () => {

    const input = useInput((state) => state.input);
    console.log(input);

    const todos = useTodos((state) => state.todos);
    console.log(todos);

    return (
        <div style={styles.MainContainer}>
            <h2 style={styles.Title}> Todo list using with Zustand</h2>
            <div style={styles.InputContainer}>
                <input
                    type="text"
                    placeholder="Enter todo"
                // value={input}
                // onChange={(e) => setInput(e.target.value)}
                />
                <Button buttonName="Add Item" style={styles.Button} />
            </div>
            <ul >
                {todos.map((todo, index) => {
                    return (
                        <li style={styles.ListContainer}>
                            <input
                                type="checkbox"
                            // checked={todos.complete}
                            // onChange={(e) => handleTodoStatus(e, todo.id)}
                            />{todo.title}
                            <Button buttonName="Delete" style={styles.TodosButton} /></li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodosWithZustand;
