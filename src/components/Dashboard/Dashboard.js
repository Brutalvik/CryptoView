import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

class Dashboard extends Component {
    render() {
        return (
            <div className="center">
                <h1>Dashboard</h1>
                <h5>Please <Link className="list" to="/login">login</Link> to continue</h5>
            </div>
        )   
    }
}

export default Dashboard
