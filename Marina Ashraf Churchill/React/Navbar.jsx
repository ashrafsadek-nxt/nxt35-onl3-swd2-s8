import "./Navbar.css"
import { Route,Routes,Link, } from "react-router-dom";
import Home from "./Home";
import About from "./About"; 
import Contact  from "./Contact";

function Navbar(){
    return(
<>
        <nav>
          <ul>
         <li>
        <Link className="nav-link" to="/" >Home</Link>
        <Link  className="nav-link" to="/about" >About</Link>
        <Link  className="nav-link" to="/contact" >Contact</Link>
      </li>
      </ul>
        </nav>


 <Routes>
        <Route path="/" element={ <Home />}/>
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact />}/>

      </Routes>
</>
    )
}
export default Navbar;