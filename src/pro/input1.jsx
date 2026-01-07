import { useContext } from "react";
import InputContext from "../conext/InputContext.jsx";






export default function Input1({value, onChange,title,type}) {
const data = useContext(InputContext);
console.log(data);

  return (
    <>   
        <label htmlFor="">{title}</label>
        <input
          onChange={(e) => {
            onChange(e.target.value);
          }}
          value={value}
          type={type}
        />
    </>
  );
}