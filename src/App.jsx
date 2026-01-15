  import './index.css'
  import Box from './box.jsx'
import Tooltip from '@mui/material/Tooltip';
import { use, useState } from 'react';
import { ListContext } from "./conext/InputContext.jsx";





export default function App() {
  
const [list,setlist]=useState([
  { id: 0, title: "قراءة كتاب", body: "" ,checked:true},
  { id: 1, title: "انهاء كوروس الرياكت", body: "" ,checked:false},
  { id: 2, title: "الدهاب لصالة الرياضة", body: "" ,checked:false},
  { id: 3, title: "قراءة كتاب", body: "" ,checked:false},
  { id: 4, title: "قراءة كتاب", body: "kk" ,checked:false}])

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

    <ListContext.Provider value={{ list,setlist ,edit,setedit,Id,setId,check,setcheck,IsDone,setIsDone,inputValue,setInputValue,state, setState}} >
     <Box />
  
    </ListContext.Provider>
     
    </div>
  )
}