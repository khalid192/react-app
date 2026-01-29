  import './index.css'
  import Box from './box.jsx'
import Tooltip from '@mui/material/Tooltip';
import {  useState,useEffect } from 'react';
import { ListContext } from "./conext/InputContext.jsx";





export default function App() {


  const [check,setcheck] =useState(false)

  const[edit,setedit]=useState(false)

  const[Id,setId]=useState('')
  
  const[IsDone,setIsDone]=useState(1)

   const [inputValue, setInputValue] = useState({ title: '' , body:'' });




    const [state, setState] = useState({
    open: false,
    title: '',
    severity: '',
    variant: ''
    
  });
  
  
  return (
    <div className="App">

    <ListContext.Provider value={{edit,setedit,Id,setId,check,setcheck,IsDone,setIsDone,inputValue,setInputValue,state, setState}} >
     <Box />
  
    </ListContext.Provider>
     
    </div>
  )
}