import './App.css';
import Register from './components/registration/Register';
import Navbar from './components/nav/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="center">
        <Register />
      </header>
    </div>
  );
}

export default App;
