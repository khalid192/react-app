
import React, { createContext, useReducer } from "react";
export const ListContext2 = createContext();




export default function FreducerList(state,action) {
  console.log(state)
  switch (action.type) {
    case "delete":
      return state.filter(item => Number(item.id) !== Number(action.data));;
    

    case "add":
      let state2=[...state,{id:Date.now(), title:action.data, body: "" ,checked:false}];
      return state2;

    case "edit":
    return state.map((itm) =>
        Number(itm.id) === Number(action.data.Id) ?
     { ...itm, title: action.data.inputValue.title, body: action.data.inputValue.body } : itm);

    case "Check":

      return state.map((itm) =>
        Number(itm.id) === Number(action.data) ? { ...itm, checked: itm.checked ? false : true } : itm
      ) 



      
    default:
      return state;
  }
  
}

export function ListProvider({ children }) {

  const init =()=>{ const savedTasks = localStorage.getItem('tasks');
  return savedTasks
    ? JSON.parse(savedTasks)
    : [

      ];}
 

  const [list, dispatch] = useReducer(FreducerList,[],init);

  return (
    <ListContext2.Provider value={{ list, dispatch }}>
      {children}
    </ListContext2.Provider>
  );
}