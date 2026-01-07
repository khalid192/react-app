import { useState } from "react";
export default function Myinput() {
  const [form, setform] = useState({
    name: "",
    email: "",
    age: "",
    areatext: "",
    checkBox: false,
    contry: "",
    Gender: "",
  });
  console.log(form);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <hr />
      <label htmlFor="name">name</label>
      <br />
      <input
        onChange={(e) => {
          setform({ ...form, name: e.target.value });
        }}
        type="text"
        id="name"
      />
      <br />
      <hr />


      <label htmlFor="email">email</label>
      <br />
      <input
        onChange={(e) => {
          setform({ ...form, email: e.target.value });
        }}
        type="email"
        id="email"
      />

      <br />


      <hr />


      <label htmlFor="age">age</label>
      <br />
      <input
        onChange={(e) => {
          setform({ ...form, age: e.target.value });
        }}
        type="number"
        id="age"
      />
      <br /> <hr />


      <label htmlFor="texterea">Textarea</label>
      <br />

      <textarea
        id="texterea"
        onChange={(e) => {
          setform({ ...form, areatext: e.target.value });}}/>
        
      

      <hr />
      <label htmlFor="select">what is ur contry:</label>


      <br />


      <select
        id="select"
        onChange={(e) => {
          setform({ ...form, contry: e.target.value });
          console.log(e.target.value);
        }}
      >
        <option value="USA">USA</option>
        <option value="ARB">ARB</option>
        <option value="MAR">MAR</option>
        <option value="GRD">GRD</option>
      </select>


      <hr />


      <label htmlFor="checkBox">are u student</label>
      <input
        type="checkbox"
        id="checkBox"
        onChange={(e) => {
          setform({ ...form, checkBox: e.target.checked });
        }}
      />
      <hr />
      <div>
        <label htmlFor="male">
          Male
          <input
            type="radio"
            name="Gender"
            value="Male"
            id="Male"
            onChange={(e) => {
              setform({ ...form, Gender: e.target.value });
            }}
          />
        </label>
        <br />

        <label htmlFor="Female">
          Female
          <input
            type="radio"
            name="Gender"
            value="Female"
            id="Female"
            onChange={(e) => {
              setform({ ...form, Gender: e.target.value });
            }}
          />
        </label>
        <br />
      </div>
      <hr />
      <button
        onClick={() => {
          console.log(form);
          console.log("name is: " +
              form.name +
              " -- age is: " +
              form.age +
              " -- email is: " +
              form.email+
              "--Gender is: " +
              form.Gender+
              "--areaText: " +
              form.areatext+
              "--is a student : " +
              form.checkBox)
        }}
      >
        submit
      </button>
    </form>
  );
}
