
import React, { createContext, useReducer } from "react";
export const ListContext2 = createContext();

export default function FreducerList(state,action) {
  switch (action.type) {
    case "delete":
      return state.filter(item => Number(item.id) !== Number(action.data));;
    

    case "add":
      let state2=[...state,{id:Date.now(), title:action.data, body: "" }];
      return state2;

    case "edit":
    return state.map((itm) =>
        Number(itm.id) === Number(action.data.Id) ?
     { ...itm, title: action.data.inputValue.title, body: action.data.inputValue.body } : itm);



      
    default:
      return state;
  }
}

export function ListProvider({ children }) {

  const [list, dispatch] = useReducer(FreducerList,[]);

  return (
    <ListContext2.Provider value={{ list, dispatch }}>
      {children}
    </ListContext2.Provider>
  );
}