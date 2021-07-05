import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const newUser = {
        name: name,
        email: email,
        password: password,
    }

    const sendData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/register', newUser)
        .then(() => console.log('Data Sent to Backend'))
        .catch(err => console.error(err))
    }
  return (
      <div>
        <form onSubmit={sendData}>
            <div>
                <input type="text"
                    className="input input-sm"
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
            <button className="btn btn-primary">Register</button>
        </form>
        </div>
  )
}

export default Register
