import React, { useEffect, useState } from "react"
import styles from "./style";

export const FetchDataWithEffect = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await data.json()
            console.log(result);
            setPosts(result);
            // return result;
        }
        getData();
    }, [])

    console.log(posts);
    return (
        <>
            <h1>This is post component</h1>

            {/* {posts.map((post) => ( */}
            <div style={styles.mainContainer}>
                <div className="user">name:Nicholas Runolfsdottir V</div>
                <div>email:abc@gmail.com</div>
            </div>
            {/* ))} */}


        </>
    )
}