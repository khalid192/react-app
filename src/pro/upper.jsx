  
import { Outlet } from "react-router-dom"
import OutlinedButtons from "./Button"


  export default function Upper(){
    return(
      <div>
        <OutlinedButtons />

         <h1 style={{width:"50vw",backgroundColor:"lightblue", textAlign:"center"}}>post</h1>
      <Outlet />
        <h1 style={{width:"50vw",backgroundColor:"lightblue", textAlign:"center"}}>post</h1> 
        
      </div>
    )
  }