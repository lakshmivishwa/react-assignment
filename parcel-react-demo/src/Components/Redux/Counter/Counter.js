import React from "react";
import Button from "../../Button/Button";
import styles from "./style";
const Counter = () => {

    const increment = () => {
        console.log("incremented")
    }

    const decrement = () => {
        console.log("incremented")
    }


    return (
        <>
            <h1>Counter One:0</h1>
            <Button buttonName="Increment Counter" handleClick={increment} style={styles.Button} />
            <Button buttonName="Decrement Counter" handleClick={decrement} style={styles.Button} />
        </>
    )
}

export default Counter;