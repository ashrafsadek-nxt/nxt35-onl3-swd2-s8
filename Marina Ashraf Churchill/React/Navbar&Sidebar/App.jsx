import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './components/Home';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import About from './components/About'; 
// import Navbar from './components/Navbar';
import Contact from './components/Contact'; 
// import Posts from './components/Posts';
import NavTask from './components/NavTask';
import SideBar from './components/SideBar';


function App() {

  return (
 
<BrowserRouter>
<div className='layout'>
<header className="navh">
<NavTask />
</header>
<div className="main">
  <aside className="sided"> <SideBar /></aside>

<section className="displayElement">
  <Routes>
     <Route path="/" element={ <Home />}/>
         <Route path="/about" element={<About/>} />
               <Route path="/contact" element={ <Contact />}/>
  </Routes>
</section>
</div>

</div>


    </BrowserRouter>
  )
}

export default App
