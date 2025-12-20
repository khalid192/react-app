import { useState } from "react";
import "./App.css";
import Box1 from "./box1";
import Box3 from "./Box3";

const verify=true;
function App() {


  return (
    <div className="App">
      <div>
        <Box1
         title="20" title1="Academi" 
        p='اكدمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها'/>


        <Box1 
        title='hello world' 
        p='this is the hello world article'/>

        <Box1 
        title='Post 3' 
        p='this the body of post 3'/>
      </div>

      <div className="BoxBtn">
       {fBox3()}
      </div>
    </div>
  );
}


function fBox3(){
  if(verify==true){return <Box3/>}else{return null}
}

export default App;
