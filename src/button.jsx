import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
  import './index.css'
  import { createTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { useContext } from 'react';
import {ListContext} from './conext/InputContext.jsx'

export default function VariantButtonGroup() {
  const {setIsDone,IsDone} = useContext(ListContext);
 
 

  return(     
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" color="primary" aria-label="Basic button group">
        <Button style={{backgroundColor:IsDone===1 ? '#000000ff' : 'white'}} onClick={() => setIsDone(1)}>الكل</Button>
        <Button style={{backgroundColor:IsDone===2 ? '#000' : 'white'}} onClick={() => setIsDone(2)}>منجز</Button>
        
        <Button style={{backgroundColor:IsDone===3 ? '#000' : 'white'}} onClick={() => setIsDone(3)}>غير منجز</Button>
      </ButtonGroup>
      
      


          
    </Box>

      )
}