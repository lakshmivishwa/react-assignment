import React, { Component } from 'react';
import styles from './style';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            age: '',
            aadharNo: '',
            address: '',
            validationError: false
        };
    }

    validateForm = () => {
        const { userName, age, aadharNo, address } = this.state;
        let isValid = true;

        if (userName.trim() === '') {
            isValid = false;
        }
        if (age.trim() === '' || isNaN(age) || Number(age) <= 0) {
            isValid = false;
        }

        if (aadharNo.trim() === '' || aadharNo.length !== 12 || isNaN(aadharNo)) {
            isValid = false;
        }

        if (address.trim() === '') {
            isValid = false;
        }

        this.setState({ validationError: !isValid });
        return isValid;
    }

    componentDidMount() {
        this.validateForm();
    }

    componentDidUpdate(prevProps, prevState) {

    }
    componentWillUnmount() {

    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleInputChange = (event) => {
        console.log(event);
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            userName: '',
            age: '',
            aadharNo: '',
            address: ''
        });
    }

    render() {
        const { userName, age, aadharNo, address, validationError } = this.state;
        console.log(this.state);
        return (
            <form style={styles.form} onSubmit={this.handleSubmit}>
                <label style={styles.label}>
                    User Name:
                    <input
                        style={styles.input}
                        type="text"
                        name="userName"
                        value={userName}
                        onChange={this.handleInputChange}
                        required
                    />
                </label>
                <br />
                <label style={styles.label}>
                    Age:
                    <input
                        style={styles.input}
                        type="number"
                        name="age"
                        value={age}
                        onChange={this.handleInputChange}
                        required
                    />
                </label>
                <br />
                <label style={styles.label}>
                    Aadhar No:
                    <input
                        style={styles.input}
                        type="text"
                        name="aadharNo"
                        value={aadharNo}
                        onChange={this.handleInputChange}
                        required
                    />
                </label>
                <br />
                <label style={styles.label}>
                    Address:
                    <textarea
                        style={styles.textarea}
                        name="address"
                        value={address}
                        onChange={this.handleInputChange}
                        required
                    />
                </label>
                <br />
                {/* {validationError && <p style={styles.errorMessage}>Please fill out all fields correctly.</p>} */}
                <button type="submit" style={styles.button}>Submit</button>
            </form>
        );
    }
}

export default RegistrationForm;
