import "./RequestBox.css";
import { useState } from "react";
import SuccessfullyPhone from "./SuccessfullyN.JSX";
import Successfully1 from "./Successfullt1";
import SuccessfullyAge from "./Successfullt0";
import SuccessfullyName from "./SuccessfullyName.jsx";
import Input1 from "./input1.jsx";
export default function Rb() {
  const [info, setInfo] = useState({
    Name: "",
    Phone: "",
    Age: 18,
    employee: false,
    salary: "less than 500$",
  });

  //section for functions
  function Cf(info) {
    console.log(info);
    setInfo((e) => {
      return { ...e, employee: info.target.checked };
    });
  }

  function Sf(info) {
    console.log(info);
    setInfo((e) => {
      return { ...e, salary: info.target.value };
    });
  }

  async function kf(e) {
    e.preventDefault();

    document.querySelector(".divSu").style.display = "flex";
    await new Promise((r) => setTimeout(r, 2000));
    info.Age >= 18 && info.Phone.length >= 10 && info.Name.length >= 3
      ? alert(
          `name: ${info.Name} , phone: ${info.Phone} , age: ${info.Age} , employee: ${info.employee} , salary: ${info.salary}`
        )
      : null;
  }

  function Df() {
    document.querySelector(".divSu").style.display = "none";
  }


  function Nf1(e) {
    setInfo((info) => {
      return { ...info, Name: e };
    });
  }

    function Nf2(e) {
    setInfo((info) => {
      return { ...info, Phone: e };
    });
  }
    function Nf3(e) {
    setInfo((info) => {
      return { ...info, Age: e };
    });
  }



  
  return (
    <>
      <div onClick={Df} className="divSu">
        {info.Age < 18 ? (
          <SuccessfullyAge />
        ) : info.Phone.length < 10 ? (
          <SuccessfullyPhone />
        ) : info.Name.length < 3 ? (
          <SuccessfullyName />
        ) : (
          <Successfully1 />
        )}
      </div>

      <form className="req">
         <h2>Requesting a Loan</h2> <hr />

        <Input1 value={info.Name} onChange={Nf1} title={'Name'} type={'text'} />
        <br />
        <Input1 value={info.Phone} onChange={Nf2} title={'Phone Number'} type={'number'} />
        <br />
        <Input1 value={info.Age} onChange={Nf3} title={'Age'} type={'number'} />
        <br />
        <label htmlFor="">Are you an employee?</label>
        <input
          onChange={(e) => {
            Cf(e);
          }}
          type="checkbox"
          checked={info.employee}
        />{" "}
        <br />
        <label htmlFor="">Salary</label>
        <select
          onChange={(e) => {
            Sf(e);
          }}
          value={info.salary}
          id=""
        >
          <option value="less than 500$">less than 500$</option>
          <option value="between 500$ and 2000$">between 500$ and 2000$</option>
          <option value="abov 2000$">abov 2000$</option>
        </select>
        <br />
        <button
          id="btn"
          style={{
            backgroundColor:
              info.Age >= 18 && info.Phone.length >= 10 && info.Name.length >= 3
                ? "green"
                : "red",
          }}
          onClick={(e) => {
            kf(e);
          }}
        >
          submit
        </button>
      </form>
    </>
  );
}
