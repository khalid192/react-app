import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Fade from '@mui/material/Fade';
export default function DisabledAccordion() {



    let size="100px"
    const [switchValue, setSwitchValue] = useState({size:"100px"});


    function handleChange(e){
        if(e.target.checked){
           setSwitchValue({...switchValue,size:"250px"});
        }else{
            setSwitchValue({...switchValue,size:"100px"});
        }
     
    }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails style={{display:'flex',justifyContent:"center"}}>
           <Switch onChange={(e)=>{handleChange(e)}}/>  
        </AccordionDetails>
      </Accordion>
      <div style={{marginTop:"20px", transition: " 1s",backgroundColor:"#e0e0e0",padding:"10px",borderRadius:"5px",height:switchValue.size}}>
        <Typography textAlign={"center"}>hello world.</Typography>
      </div>
    </div>
  );
}