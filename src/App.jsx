
import DisabledAccordion from './accordion.jsx';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



export default function App() {
  return (
    <div className="App">
       <Container maxWidth="md" sx={{ bgcolor: '#abb3baff', height: '100vh', padding: 2 ,borderRadius: "10px"}} >
         <DisabledAccordion />
      </Container>
    
    </div>
   

  );
}