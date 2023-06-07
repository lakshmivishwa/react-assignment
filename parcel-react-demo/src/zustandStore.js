import { create } from 'zustand';

let nextId = 5;

export const useTodos = create((set) => ({
    todos: [
        {
            title: "noteBook",
            id: 1,

        },
        {
            title: "pen",
            id: 2,


        }
    ],
    addTodo: (text) => set(state => ({
        todos: [...state.todos,
        {
            title: text,
            id: nextId++,

        }]
    })),

    deleteTodo: (index) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== index) })),

}))
