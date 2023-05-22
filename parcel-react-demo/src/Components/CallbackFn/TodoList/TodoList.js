import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import { useState, useCallback } from 'react';
import styles from "./style";
let nextId = 5;
const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Todo 1' },
        { id: 2, text: 'Todo 2' },
        { id: 3, text: 'Todo 3' },

    ]);
    const addTodo = useCallback((text) => {

        setTodos([
            ...todos,
            {
                text: text,
                id: nextId++,
            }
        ]);

    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }, []);

    const handleTodoStatus = useCallback((e, id) => {
        const changedArray = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: e.target.checked }
            }
        })
    }, [])

    return (

        <><div >
            <h2>Todo List</h2>
            <TodoForm addTodo={addTodo} />
        </div><div style={styles.MainContainer}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} handleTodoStatus={handleTodoStatus} />
                ))}
            </div></>
    );
};
export default TodoList;
