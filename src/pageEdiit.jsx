import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { ListContext } from "./conext/InputContext.jsx";


export default function PageEdiit() {

function Cancel(){setedit(false)}

    const { edit, setedit,Id } = useContext(ListContext);
console.log(Id)




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
         
            id="outlined-basic"
            label="العنوان"
            variant="standard"
            sx={{direction:'rtl',"& input":{textAlign:'right',},"& label":{direction:'rtl',textAlign:'right',right:0,left:'auto'}}}
          />

          <TextField
            id="outlined-basic"
            label="التفاصيل المهمة"
            variant="standard"
            sx={{direction:'rtl',"& input":{textAlign:'right'},"& label":{direction:'rtl',textAlign:'right',right:0,left:'auto'}}}
          />
        </Stack>
        <Stack spacing={2} direction="row" justifyContent={'flex-end'} marginTop={'20px'}>
            <Button onClick={Cancel} variant="text">إلغاء</Button>
            <Button variant="text">تعديل</Button>
        </Stack>
      </div>


      </div>
    </Box>
  );
}
