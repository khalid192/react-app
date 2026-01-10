import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
  import './index.css'
  import { createTheme } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
export default function VariantButtonGroup() {


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
        <Button>الكل</Button>
        <Button>منجز</Button>
        
        <Button>غير منجز</Button>
      </ButtonGroup>
      
      


          
    </Box>

      )
}