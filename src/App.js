import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Register from './components/registration/Register';
import Login from './components/login/Login'
import Dashboard from './components/Dashboard/Dashboard';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <header className="center">
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/dashboard" exact component={Dashboard}></Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
