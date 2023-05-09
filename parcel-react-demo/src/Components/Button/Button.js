import React from "react";
import styles from "./Style";

const Button = ({ buttonName, handleClick ,style}) => {

    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                style={style}
            >
                {buttonName}
            </button>
        </>
    )
}

export default Button;