import { Routes ,Route, Link } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contant from './assets/pages/Contant';
import './App.css';


function App() {
  

  return (
    <>
     <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/con'>Contant</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/con' element={<Contant/>}></Route>

      </Routes>
      
    </>
  )
}

export default App
