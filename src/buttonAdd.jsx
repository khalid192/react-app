
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState,useMemo } from 'react';
import { useContext,useEffect,useReducer } from 'react';
import {ListContext} from './conext/InputContext.jsx'
import { ListContext2 } from "./reducer/RedurcerList.jsx"



export default function ButtonAdd() {   
  

 const { dispatch } = useContext(ListContext2)
  

  let [inputValue, setInputValue] = useState('');
   const {setState,state} = useContext(ListContext);
   
 




  

  function Handelchange() {
   

    if(inputValue!=''){
      dispatch({type:"add",data:inputValue})


      setInputValue('');
    setState({
      ...state,
      open: true, title: 'تمت الاضافة بنجاح', severity: 'success', variant: 'filled'
    });}else{
        setState({
      ...state,
      open: true, title: 'خطأ ، يجب ملء عنوان المهمة أولاً', severity: 'error', variant: 'filled'
    });
      }

   
  
  }



    return (
    <>
      <Stack  direction={'row'} spacing={1} width={'95%'} margin={'10px'} height={"40px"}>
       <Button onClick={Handelchange} size='large' variant="contained" style={{width:'30%'}} >اضافة</Button>
       <TextField value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}  size='small' label="عنوان المهمة" />
      </Stack>
    </>
    )
}