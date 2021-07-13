import React, {useState} from 'react'
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const loginUser = {
        email: email,
        password: password
    }

    const doLogin = async(e) => {
            e.preventDefault();
            axios.post('/users/login', loginUser)
            .then(res => 
                {
                    if(res.status === 200) {
                    axios.get(`/users/dashboard/${loginUser.email}`, { headers: {"Authorization" : `Bearer ${res.data}`} })
                    .then(res => {setName(res.data)})
                }
            })
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
            <button className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}

export default Login
