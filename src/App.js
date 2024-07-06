import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Login />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/home" element={<Home />}/>
</Routes>
</BrowserRouter>
      </>
  );
}

export default App;
