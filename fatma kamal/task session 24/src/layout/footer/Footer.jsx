import './Footer.css'
import flower from '../../assets/images/flower.jpeg'

function Footer() {

  return (
    <div id="dv">
       
        <ul>
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">content</a></li>
         </ul>
        <ul>
            <li><a href="">prodect1</a></li>
            <li><a href="">prodect2</a></li>
            <li><a href="">prodect3</a></li>
        </ul>
    
       <div id='dv1'>
            <a href=""> 
            <img src={flower} alt="" />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at cupiditate provident rerum aspernatur</p>
       </a>
       </div>
        
    </div>
  )
}

export default Footer
