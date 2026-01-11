  import './index.css'
  import Box from './box.jsx'
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { ListContext } from "./conext/InputContext.jsx";


export default function App() {
  
const [list,setlist]=useState([
  { id: 0, title: "قراءة كتاب", body: "" },
  { id: 1, title: "انهاء كوروس الرياكت", body: "" },
  { id: 2, title: "الدهاب لصالة الرياضة", body: "" },
  { id: 3, title: "قراءة كتاب", body: "" },
  { id: 4, title: "قراءة كتاب", body: "" }])
  
  
  
  return (
    <div className="App">

    <ListContext.Provider value={{ list,setlist }}>
     <Box />
    </ListContext.Provider>
     
    </div>
  )
}