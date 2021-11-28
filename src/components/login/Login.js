import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Login.css'
import '../registration/Register.css'

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const loginUser = {
        email: email,
        password: password
    }


    const history = useHistory();

    const doLogin = async(e) => {
            if (!loginUser.email || !loginUser.password)
            {
                setMessage("Username/Password cannot be blank")
            }

            e.preventDefault();
            axios.post('/users/login', loginUser)
            .then(res => 
                
                {
                    console.log(res)
                    axios.get(`/users/dashboard/${loginUser.email}`, { headers: {"Authorization" : `Bearer ${res.data}`} })
                    .then(res => {
                        
                        if (res.status === 200)
                        {
                            
                            history.push(`/dashboard`)
                        }
                        else {
                            setMessage("Username/Password Error")
                        }
                    } )
                    
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
            <button className="btn-register">Login</button>
        </form>
        <div>
            <p>{message}</p>
        </div>
        <div>
            <p>New User?</p><Link className="list" to="/register"><p>Register Here</p></Link>
        </div>
    </div>
  )
}

export default Login
