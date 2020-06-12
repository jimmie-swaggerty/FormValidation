import React, {useState} from 'react';

const SampleForm = (props) => {

    const [first_name, setFirstName] = useState("");
    const [first_name_error, setFirstNameError] = useState("");
    const [last_name, setLastName] = useState("");
    const [last_name_error, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [email_error, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [password_error, setPasswordError] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [confirm_error, setConfirmError] = useState("");

    const alertStyle = ({
        color: "red"
    })

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First name is required")
        }
        else if(e.target.value.length < 3) {
            setFirstNameError("First name must be at least three characters long!")
        }
        else {
            setFirstNameError(null);
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last name is required")
        }
        else if(e.target.value.length < 3) {
            setLastNameError("Last name must be at least three characters long!")
        }
        else {
            setLastNameError(null);
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required")
        }
        else if(e.target.value.length < 8) {
            setPasswordError("Password must containg at least eight characters!")
        }
        else {
            setPasswordError(null);
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password){
            setConfirmError("Passwords must Match")
        }
        else {
            setConfirmError(null);
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))) {
            setEmailError("Email must be a valid address!");
        }
        else {
            setEmailError(null);
        }
    }


    return(
        <div>
            <form>
                <label>First Name:</label>
                <input type="text" onChange={ handleFirstName }></input>
                { first_name_error ? <p style={alertStyle}>{first_name_error}</p> : ''}
                <br></br>
                <label>Last Name:</label>
                <input type="text" onChange={handleLastName}></input>
                { last_name_error ? <p style={alertStyle}>{last_name_error}</p> : ''}
                <br></br>
                <label>Email:</label>
                <input type="email" onChange={ handleEmail }></input>
                { email_error ? <p style={alertStyle}>{email_error}</p> : ''}
                <br></br>
                <label>Password:</label>
                <input type="password" onChange={handlePassword}></input>
                { password_error ? <p style={alertStyle}>{password_error}</p> : ''}
                <br></br>
                <label>Confirm Password:</label>
                <input type="password" onChange={handleConfirmPassword}></input>
                { confirm_error ? <p style={alertStyle}>{confirm_error}</p> : ''}
                <input type="submit"></input>
            </form>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirm_password}</p>
        </div>

    )

}

export default SampleForm;