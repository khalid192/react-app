import { Route, Link, Routes,Outlet } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "./conext/InputContext.jsx";

export default function Post() {
  const posts = useContext(PostsContext);
  const postList = posts.map((post) => (
    <div key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </div>
  ));
  return (
    <div>

      <h1>This is Post Page</h1><br />
        

      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <div> {postList}</div>
    
    </div>
  );
}
