import React from "react";

import Login from "./Components/Login";
import TodosWithuseState from "./Components/TodosWithUseState/Todos";
import TodosWithuseReducer from "./Components/TodosWithUseReducer/Todos";
import BasicExample from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile";
import TodoContext from "./Components/TodosWithUseContext/TodoContext/TodoContext";
import UseCallbackComp from "./Components/UseCallbackComp"

export default function App() {




    return (

        <>

            {/* <BasicExample />
            <TodosWithuseReducer />
            <TodosWithuseState /> */}
            <TodoContext />
            {/* <UseCallbackComp/> */}

        </>



    )
}

