import { useState } from "react";
import "./App.css";
import Box1 from "./box1";
import Box3 from "../Box3";

const verify = true;
function App() {
  const catigories = [
    {
      id: 1,
      title: "Academi",
      p: "اكدمية مخصصة لتعليم البرمجة بمختلف لغاتها وتقنياتها",
    },
        {
      id: 2,
      title: "hello world",
      p:"this is the hello world article",
    },
        {
      id: 3,
      title: "Post 3",
      p: "this the body of post 3",
    },
  ];



  return (
    <div className="App">
      
      <div>
        {catigories.map((cat) => {
          return <Box1 key={cat.id} title={cat.title} p={cat.p} />;
        })}
      </div>

      <div className="BoxBtn">{fBox3()}</div>
    </div>
  );
}

function fBox3() {
  if (verify == true) {
    return <Box3 />;
  } else {
    return null;
  }
}

export default App;
