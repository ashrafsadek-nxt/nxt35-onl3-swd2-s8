import './Navbar.css';
import logo from '../../assets/images/logo.png';
function Navbar() {
  return (
    <div id='dv'>
      <a>
        <img src={logo} alt="" />
        <span>Ai</span>
      </a>
      <ul>
        <li ><a  className='a' href="">home</a></li>
        <li ><a  className='a' href="">content</a></li>
        <li ><a  className='a' href="">about</a></li>
      </ul>
    </div>
  )
}

export default Navbar
