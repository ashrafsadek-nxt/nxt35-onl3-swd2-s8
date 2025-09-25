
import flower from "../../assets/images/flower.jpg"
import "./Navbar.css"
function Navbar()
{
    return(
        < div className="Navbar">
            <a href="#">
                <img src={flower} alt="" className="logo"/>
                <span>fashion</span>
            </a>
            <div>
                <ul>
                    <li>
                        <a href="">contact</a>
                    </li>
                    <li>
                        <a href="">prouduct</a>
                    </li>
                    <li>
                        <a href="">history</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}export default Navbar;