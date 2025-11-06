import "./Posts.css";
import { Link } from "react-router-dom";
import { postsContext } from "../Context/PostContext";
import { useContext } from "react";

 function Posts() {
    const Posts= useContext(postsContext);
    let PostList =Posts.map((post)=>{
        return(
            <Link key={post.id} to={`/PostDetails/${post.id}`}>
            <div className="flex-Continer" style={{background:"orange",padding:"20px",margin:"10px"}}>
                <h1>{post.title}</h1>
                <div className="imge">
                <img
                 src={post.image}   // ← هنا بتستخدمي اللينك اللي كتباه فوق
            alt={post.title} 
            style={{  objectFit: "cover",
   borderRadius: "10px" }}/>
              </div>
            </div>

            </Link>
        )
    }

    )
    return(
        <>
       {PostList}
     
       </>
    )
}
export default Posts;