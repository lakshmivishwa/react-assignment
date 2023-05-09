import React from "react";


const Avatar = (props) => {

    console.log(props);
    return (
        <>
            <p>This is a Avatar component</p>
            <img width={props.width} height={props.height} border={props.border} src="http://localhost:1234/assets/download.jpeg"
                This is Avatar Component
            />
        </>
    )
}

export default Avatar;
