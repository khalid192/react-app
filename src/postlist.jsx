import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "./conext/InputContext.jsx";




export default function Postlist() {
    const {Id} = useParams()
   
    const posts = useContext(PostsContext);
  
    const post = posts.find((p) => p.id ===Number(Id));
    console.log(Id);
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  );
}