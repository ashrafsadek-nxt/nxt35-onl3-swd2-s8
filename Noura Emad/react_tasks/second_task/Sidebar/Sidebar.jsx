import "./Sidebar.css"
function Sidebar(){
    return(
       <div className="sidebar" >
        <ul>
            <li>
                <a href="">link1</a>
            </li>
            <li>
                <a href="">link2</a>
            </li>
            <li>
                <a href="">link3</a>
            </li>
        </ul>
        <hr />
        <section className="sho">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate fuga odit enim eaque reprehenderit, quia dolor commodi, iure in, expedita accusamus consequatur. Provident pariatur odio in hic, harum delectus eveniet?</p>
        </section>
       </div> 
    )
}
export default Sidebar