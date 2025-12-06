import { Link } from "react-router-dom";



 function NotFound(){
    return(
<>
<h1>404 (Not Found)</h1>
 <p>The page you are looking for does not exist.</p>
<Link to="/"  style={{background:"orange", fontSize:"20px",padding:"6px",margin:"10px",textDecoration:"none"}}>Home</Link>
</>
    );
}
export default NotFound;