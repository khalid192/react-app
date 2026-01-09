import { useParams ,Link,Outlet} from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../conext/InputContext.jsx";
import Worngpage from "./Worngpage.jsx";




export default function Postlist() {
    const {id} = useParams()
   
    const posts = useContext(PostsContext);
  
    const post = posts.find((p) => { if(p.id ===Number(id)){return p} } );
    console.log(post);
  return (
    <div>
        {post === undefined ? <Worngpage /> : null}
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        
        <Link to="/post">
            <button>Go to Post Page</button>
        </Link>
    
    </div>
  );
}