import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext ,useEffect} from "react";
import { ListContext } from "./conext/InputContext.jsx";





export default function PageEdiit() {
 
  const { edit, setedit,Id,list,setlist ,inputValue,setInputValue,state, setState} = useContext(ListContext);
 const item=list.find(i=> i.id==Id) 













 
useEffect(() => {
  if (item) {
    setInputValue({
      title: item.title,
      body: item.body
    });
  }
}, [item]);

function Cancel(){setedit(false)}

  function TitleF(e){
    setInputValue({...inputValue, title:e.target.value})
  }

  function BodyF(e){
    setInputValue({...inputValue, body:e.target.value})
  } 

  function Update(){
    if(inputValue.title.trim() !== '') {
    setlist((E) =>
      E.map((itm) =>
        itm.id === Id ? { ...itm, title: inputValue.title, body: inputValue.body } : itm
      )
    );
    setedit(false);
     setState({
      ...state,
      open: true, title: 'تم التعديل بنجاح', severity: 'success', variant: 'filled'
    });
  }else{
 setState({
      ...state,
      open: true, title: 'خطأ في التعديل، يجب ملء العنوان أولاً', severity: 'error', variant: 'filled'
    });
  }
}

 





    if (!edit) { return null; } 
  return (

    

   
    <Box>

      <div
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          background: "#2d292986",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10000,
          top: 0,
          left: 0,
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
      <div style={{background:'#ffff',padding:'20px',borderRadius:'3px',width:'400px',}}>
        <Stack fontSize={'small'}  sx={{direction:'rtl' ,color:'#5f5a5aff'}}>تعديل المهمة</Stack>
        <Stack spacing={2} direction="column"  >
            
          <TextField
            onChange={(e)=>{TitleF(e)}}
            id="outlined-basic"
            value={inputValue.title}
            label="العنوان"
            variant="standard"
            sx={{direction:'rtl',"& input":{textAlign:'right',},"& label":{direction:'rtl',textAlign:'right',right:0,left:'auto'}}}
          />

          <TextField
           onChange={(e)=>{BodyF(e)}}
           value={inputValue.body}
            id="outlined-basic"
            label="التفاصيل المهمة"
            variant="standard"
            sx={{direction:'rtl',"& input":{textAlign:'right'},"& label":{direction:'rtl',textAlign:'right',right:0,left:'auto'}}}
          />
        </Stack>
        <Stack spacing={2} direction="row" justifyContent={'flex-end'} marginTop={'20px'}>
            <Button onClick={Cancel} variant="text">إلغاء</Button>
            <Button onClick={Update} variant="text">تعديل</Button>
        </Stack>
      </div>
      

      </div>

            
    </Box>
  );
}
