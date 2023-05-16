import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import styles from "./style";
const Navbar = () => {
    return (
        <nav style={styles.Nav} >
            <ul style={styles.ListContainer}>
                <li style={styles.List}>
                    <Link to="/" style={styles.Link}>Login</Link>
                </li>
                <li style={styles.List}>
                    <Link to="/about" style={styles.Link}>Profile</Link>
                </li>
                <li style={styles.List}>
                    <Link to="/todoswithusestate" style={styles.Link}>TodosWithUseState</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;