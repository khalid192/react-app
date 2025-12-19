import { useState } from "react";
import "./App.css";
import Box1 from "./box1";
import Box2 from "./Box2";
import img from "./assets/startloop.svg"
import img1 from "./assets/woman.jpg"
import img2 from "./assets/star.svg"
import img3 from "./assets/rose.jpg"
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
        <Box2 title="جديدة" img={img}/>
        <Box2 title='الاكتر قراءة' img1={img1} />
        <Box2 title='مقالات مميزة' img={img2} img1={img3}/>
      </div>
    </div>
  );
}

export default App;
