import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Register from './components/registration/Register';
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <header className="center">
          
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={Login}></Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
