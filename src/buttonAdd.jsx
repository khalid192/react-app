
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useContext } from 'react';
import {ListContext} from './conext/InputContext.jsx'


export default function ButtonAdd() {   

  let [inputValue, setInputValue] = useState('');
   const {list ,setlist} = useContext(ListContext);

  function Handelchange() {
    if(inputValue!=''){setlist((e)=>[...e,{id:list.length+1, title: inputValue, body: "" }])}

    setInputValue('')
  
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