import { Route,Link,Routes } from "react-router-dom";
import Post from "./post";
import Home from "./Home";
import Postlist from "./postlist.jsx";
import NotFound from "./NotFound.jsx";
import Upper from "./upper.jsx";





export default function App() {
  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />


      <Route path="/post" element={<Upper />}>
       <Route index element={<Post />} />
       <Route path=":id" element={<Postlist />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>   
    </div>
   

  );
}