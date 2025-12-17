import { useState } from "react";
import "./App.css";
import Box1 from "./box1";
import Box2 from "./Box2";
function App() {
  return (
    <div className="App">
      <div>
        <Box1 />
        <Box1 />
        <Box1 />
        <Box1 />
        <Box1 />
      </div>

      <div className="BoxBtn">
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
        <Box2/>
      </div>
    </div>
  );
}

export default App;
