
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useContext,useEffect } from 'react';
import {ListContext} from './conext/InputContext.jsx'



export default function ButtonAdd() {   

  let [inputValue, setInputValue] = useState('');
   const {list ,setlist,setState,state} = useContext(ListContext);


   
  useEffect(() => {
  const savedTasks = localStorage.getItem('tasks');

  if (savedTasks) {
    setlist(JSON.parse(savedTasks));
  }
}, []);
   

  function Handelchange() {
   

    if(inputValue!=''){
      setlist((e)=>[...e,{id:Date.now(), title: inputValue, body: "" }]);
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