import { useState, useEffect } from "react";
export default function Aray() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
  ]);

  const [inputValue, setInputValue] = useState("");
  function removeItem(itemToRemove) {
    setItems((prev) => prev.filter((item) => item.id !== itemToRemove.id));
    console.log(itemToRemove.id);
  }
 
  function EditItem(itemToEdit) {
const newName = prompt("Enter the new name:", itemToEdit.name);
if (newName !== null && newName.trim() !== "") {
  setItems((prev) => prev.map((item) =>
    item.id === itemToEdit.id ? { ...item, name: newName } : item
  )); 
}



  
}


  const listItems = items.map((item) => (
    <li style={{ listStyle: "none" }} key={item.id}>
      <button onClick={() => EditItem(item)}>🔄</button><button onClick={() => removeItem(item)}>❌</button>
      {item.name}
    </li>
  ));

  function Fbutton() {
    if (inputValue.trim() === "") {
      alert("Please enter a valid item.");
    } else {
      setItems([...items, { id: items.length + 1, name: inputValue }]);
      setInputValue("");
    }
  }
  function Finput(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <ul>{listItems}</ul>
      <input type="text" name="inputV" value={inputValue} onChange={Finput} />
      <button onClick={Fbutton}>add</button>
    </div>
  );
}
