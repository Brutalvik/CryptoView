import React, {useState} from 'react'
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);

    const loginUser = {
        email: email,
        password: password
    }

    const doLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users/login', loginUser)
        .then(() => console.log('Data Sent to Backend'))
        .catch(err => console.error(err))
    }

  return (
    <div>
      <form onSubmit={doLogin}>
            <div>
                <input type="text"
                    className="input"
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
            <button className="btn btn-primary"
            disabled={disable}>Login</button>
        </form>
    </div>
  )
}

export default Login
