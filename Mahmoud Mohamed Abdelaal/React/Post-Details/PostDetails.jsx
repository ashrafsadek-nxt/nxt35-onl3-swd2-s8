
import { useParams } from "react-router-dom"
import { useContext } from "react";
import { postsContext } from "../Context/PostContext";
import NotFound from "../NotFound";


export default function PostDetails({title,body}){
 const posts =useContext(postsContext);
 const {postId} =useParams();
 const post =posts.find((p)=>{

    return p.id==postId
 })

    //  const x =useParams();
    //  console.log(x)

    // de structioning
    
    console.log(post);
if (post){

    return(
    <>
   
    <h1>Post Page Details</h1>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    
    
    </>
)
}
else{
    return(


        <>
    <NotFound />
    </>
    )
    
}
}