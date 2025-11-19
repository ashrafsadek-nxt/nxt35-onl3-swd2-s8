
import flower from "../assets/images/flower.jpg"
import "./Page.css"
function Page()
{
   return(
    <div className="page">
    <div className="nav">
        <ul>
            <li>
                <a href="">prouduct</a>
            </li>
            <li>
                <a href="">shosho</a>
            </li>
            <li>
                <a href="">menna</a>
            </li>
        </ul>

    </div>
    <div className="cards">
        <div className="card"><img src={flower} alt=""  className="logo"/></div>
        <div className="card"><img src={flower} alt=""  className="logo"/></div>
        <div className="card"><img src={flower} alt="" className="logo" /></div>
        <div className="card"><img src={flower} alt=""  className="logo"/></div>

    </div>
    </div>

   )
}
export default Page;
