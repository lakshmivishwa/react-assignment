import Button from "../../Button/Button";
import React from "react";
import styles from "./style";
import { useCallback } from 'react';
const TodoItem = ({ todo, deleteTodo, handleTodoStatus }) => {

    console.log(todo);
    const handleDelete = useCallback(() => {
        deleteTodo(todo.id);
    }, [deleteTodo, todo.id]);

    return (
        <div>
            <ul >
                <li key={todo.id} style={styles.ListContainer}>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={(e) => handleTodoStatus(e, todo.id)}
                    />
                    {todo.text}

                    <Button buttonName="Delete"
                        handleClick={() => handleDelete(todo.id)}
                        style={styles.TodosButton} /></li>
            </ul>
        </div>

        // <div>
        //     <span>{todo.text}</span>
        //     <Button onClick={handleDelete}>Delete</Button>
        // </div>
    );
};

export default TodoItem;