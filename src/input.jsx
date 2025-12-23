import { useState } from "react";
export default function Myinput() {
 const [value,setvalue]=useState()

  function Inputfunc(value) {

    
    setvalue(value)
  }

  return (
    <div>
      <label>My name is: {value}</label>
      <input value={value}
        onChange={(e) => {
          Inputfunc(e.target.value);
        }}
      />
    </div>
  );
}
