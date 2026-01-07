import { Route,Link,Routes } from "react-router-dom";



export default function Home(){
    return(
        <div>
            <h1>Welcome to Home Page</h1>
            <Link to="/post"><button>Go to Post</button></Link>
        </div>
    )
}