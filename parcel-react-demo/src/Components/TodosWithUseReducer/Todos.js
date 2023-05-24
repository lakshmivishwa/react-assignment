import React, { useReducer } from "react";
import Button from "../Button/Button";
import styles from "./style";

let nextId = 5;
const TodosWithuseReducer = () => {

    const initialState = {
        input: "",
        checked: false,
        todos: [
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
        ]
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_INPUT":
                return {
                    ...state,
                    input: action.payload
                };
            case "ADD_TODO":
                return {
                    ...state,
                    todos: [
                        ...state.todos,
                        {
                            title: action.payload,
                            id: nextId++,
                            complete: false
                        }
                    ]
                };
            case "DELETE_TODO":
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.payload)
                };
            case "TOGGLE_TODO":
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        if (todo.id === action.payload) {
                            return {
                                ...todo,
                                complete: !todo.complete
                            };
                        }
                        return todo;
                    })
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddTodo = () => {
        console.log("clicked");
        dispatch({ type: "ADD_TODO", payload: state.input });
    };

    const handleDeleteTodo = id => {
        console.log(id);
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    const handleTodoStatus = (e, id) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    return (
        <div style={styles.MainContainer}>
            <h2 style={styles.Title}>Todo list using with useReducer</h2>
            <div style={styles.InputContainer}>
                <input
                    type="text"
                    style={styles.Input}
                    value={state.input}
                    onChange={e => dispatch({ type: "SET_INPUT", payload: e.target.value })}
                ></input>
                <Button buttonName="Add Item" handleClick={handleAddTodo} style={styles.Button} />
            </div>
            <div style={styles.FilterContainer}>
                <span>Filter by priority</span>
                <input type="text" style={styles.Input} />
            </div>

            <ul>
                {state.todos.map((todo, index) => (
                    <li key={todo.id} style={styles.ListContainer}>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={e => handleTodoStatus(e, todo.id)}
                        />
                        {todo.title}
                        <Button buttonName="Delete" handleClick={() => handleDeleteTodo(todo.id)} style={styles.TodosButton} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TodosWithuseReducer;
