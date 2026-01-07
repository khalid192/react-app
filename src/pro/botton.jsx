import { useState } from "react"


export default function Button(){

  const [name,setnam]=useState("khalid")
    function Fbutton(){
  if(name==="khalid"){setnam("arrazani")}else{setnam("khalid")}
       
   
}
    return <div>
        <button onClick={Fbutton}>cleck me</button>
        <h1>{name}</h1>
    </div>

}

