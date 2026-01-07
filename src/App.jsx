import { Route,Link,Routes } from "react-router-dom";
import Post from "./post";
import Home from "./Home";
import Postlist from "./postlist.jsx";





export default function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/post/:Id" element={<Postlist />} />
    </Routes>   
    </div>
   

  );
}