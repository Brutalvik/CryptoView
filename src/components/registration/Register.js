import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [message, setMessage] = useState("");

    const newUser = {
        name: name,
        email: email,
        password: password,
    }

    const sendData = (e) => {
        e.preventDefault();

        if(!newUser.name) {
            setMessage("Name cannot be blank")
        }
        else if (newUser.name.length <= 2){
            setMessage("Name should be at least 3 characters long")
        }
        else if (!newUser.email) {
            setMessage("Email cannot be blank")
        }
        else if (!newUser.password || !confirmPassword) {
            setMessage("Password cannot be blank")
        }
        else if (newUser.password !== confirmPassword) {
            setMessage("Passwords do not match")
        }
        else
        {
            axios.post('/users/register', newUser)
            .then(response => {
                if (response.status===200){
                    setMessage(response.data)
                    setDisable(true);
                }
                else{
                    setMessage("Registration Failed")
                }
            })
            .catch(err => console.error(err))
        }
    }

  return (
      <div>
        <form onSubmit={sendData}>
            <div>
                <input type="text"
                    className="input"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input type="text"
                className="input input-sm"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                 <input type="password"
                className="input input-sm"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <input type="password"
                className="input input-sm"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <button className="btn-register"
            disabled={disable}>Register</button>
            <br/>
            <h5>{message}</h5>
        </form>
        <div>
            <p>Already registered?</p><Link className="list" to="/login"><p>Login</p></Link>
        </div>
        </div>
  )
}

export default Register
