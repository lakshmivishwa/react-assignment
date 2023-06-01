import { create } from 'zustand';

export const useInput = create((set) => ({
input:"",

}))

export const useTodos = create((set) => ({
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
    ],
    // addTodo: () => set(state => ({
    //     todos:
    // }))

}))