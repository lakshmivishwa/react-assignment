import React from "react";

import Login from "./Components/Login";
import TodosWithuseState from "./Components/TodosWithUseState/Todos";
import TodosWithuseReducer from "./Components/TodosWithUseReducer/Todos";
import BasicExample from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile";
import TodoContext from "./Components/TodosWithUseContext/TodoContext/TodoContext";
import UseCallbackComp from "./Components/UseCallbackComp";
import ImageGallery from "../src/Components/Image/ImageGallery/ImageGallery";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import TodoList from "./Components/CallbackFn/TodoList/TodoList"
import Counter from "./Components/Redux/Counter/Counter";
import CounterTwo from "./Components/Redux/CounterTwo/CounterTwo";
import Total from "./Components/Redux/Total/Total";
import { FetchDataWithEffect } from "./Components/fetchDataWithEffect/fetchDatawithuseEffect";

import TodosWithZustand from "./Components/Zustand/TodoForm/Todos";
export default function App() {
    "http://localhost:3000/assets/images/invoice-presentation.png"

    const images = [
        { src: "/public/assets/download.jpeg", alt: 'Image 1' },
        { src: "http://localhost:1234/assets/download.jpeg", alt: 'Image 2' },
        { src: "http://localhost:1234/assets/download.jpeg", alt: 'Image 3' },
    ];
    return (
        <>
            {/* <BasicExample />
            <TodosWithuseReducer />
            <TodosWithuseState /> */}
            {/* <TodoContext /> */}
            {/* <UseCallbackComp/> */}
            {/* <ImageGallery images={images} /> */}
            {/* <RegistrationForm /> */}
            {/* <TodoList /> */}
            {/* <Total /> */}
            {/* <Counter /> */}
            {/* <CounterTwo /> */}
            {/* <FetchDataWithEffect /> */}
            <TodosWithZustand />

        </>

    )
}

