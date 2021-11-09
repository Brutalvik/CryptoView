import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [message, setMessage] = useState("");

    const newUser = {
        name: name,
        email: email,
        password: password,
    }

    const sendData = (e) => {
        e.preventDefault();
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
                 <input type="text"
                className="input input-sm"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </div>
            <button className="btn-register"
            disabled={disable}>Register</button>
            <br/>
            <h5>{message}</h5>
        </form>
        </div>
  )
}

export default Register
