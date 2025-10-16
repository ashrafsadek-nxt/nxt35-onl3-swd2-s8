
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './navbar';
import Sidebar from './Sidebar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import Settings from './pages/Settings';

function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
