import { useReducer,useState} from "react";
import Freducer from "./conext/CaluctReducer.jsx"


export default function Caluct() {

const [state, dispatch] = useReducer(Freducer,0);
const [input1,setinput1 ]=useState(0)
const [input2,setinput2 ]=useState(0)



    function Fplus() {dispatch({ type:'add', data:{input1,input2} })}
    function Fminus() {dispatch({ type:'minus', data:{input1,input2} })}
    function Fmultiply() {dispatch({ type:'multiply', data:{input1,input2} })}
    function Fdivide() {dispatch({ type:'divide', data:{input1,input2} })}



  return (
    <>
      <div
        style={{
            marginTop:'10px',
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>حاسبة المهام</h4>

        <label htmlFor="num1">num1</label>
        <input onChange={(e)=>{setinput1(e.target.value)}} type="Number" id="num1" /> <br />

        <label htmlFor="num2">num2</label>
        <input onChange={(e)=>{setinput2(e.target.value)}} type="Number" id="num2" />

        <br />

        <button onClick={Fplus}>plus</button>
        <br />

        <button onClick={Fminus}>minus</button>
        <br />

        <button onClick={Fmultiply}>multiply</button>
        <br />

        <button onClick={Fdivide}>divide</button>
        <br />
        <div>{state}</div>
      </div>
    </>
  );
}
