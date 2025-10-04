import "./SideBar.css";
import { Link } from "react-router-dom";
import About from "./About"; 
import Contact from "./Contact";


function SideBar(){
    return(
        <>
<div className="flexx">
        <div className="divv">
          <ul className="ull">
         <li>
        <Link className="nav-linkk" to="/contact" >Contact</Link>
        </li>
        <li>
        <Link  className="nav-linkk" to="/about" >About</Link>
      
      </li>
      </ul>
        </div>

</div>

</>
    )
}
export default SideBar;