import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "./Home";
import About from "./About"; 


function NavTask(){
    return(
<div className="dv">
        <section className="navlink">
          <ul>
         <li>
        <Link className="nav-link" to="/" >Home</Link>
        </li>
        {/* <li>
        <Link  className="nav-link" to="/about" >About</Link>
      
      </li> */}
        <li>
        <Link  className="nav-link" to="/posts" >Posts</Link>
      
      </li>
      </ul>
        </section>
</div>
    )
}
export default NavTask;