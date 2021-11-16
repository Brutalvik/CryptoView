import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = {
        email: email,
        password: password
    }


    const history = useHistory();

    const doLogin = async(e) => {
            e.preventDefault();
            axios.post('/users/login', loginUser)
            .then(res => 
                {
                    if(res.status === 200) {
                        axios.get(`/users/dashboard/${loginUser.email}`, { headers: {"Authorization" : `Bearer ${res.data}`} })
                    .then(res => <Dashboard getGreet={res.data}/>)
                    history.push(`/dashboard`)
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
