import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}  from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Menubar/>
    </div>
  );
}

export default App;

