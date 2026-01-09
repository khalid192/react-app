import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons() {


let x=0
 function handleClick(){
    x=x+1
    console.log("Button clicked",x);
 }

    
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={handleClick}  variant="outlined" size='large'>Primary</Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Link
      </Button>
    </Stack>
  );
}