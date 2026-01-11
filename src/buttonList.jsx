import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';



export default function ButtonList(){
    
    const btn =<ListItemIcon 
      sx={{
        minWidth: 40,
        marginLeft: 'auto',
        margin:0
      }}
    >
      <Fab onClick={()=>{console.log(1)}} size="small" sx={{background:"white",boxShadow:'#c93c23ff 0 0 1px 1px ', '&:hover':{backgroundColor: '#d999927c',},scale:'0.75' }}  aria-label="Delete">
        <DeleteOutlineIcon sx={{color:"#c93c23ff"}}  /> 
      </Fab>

     <Fab size="small" sx={{background:"white",boxShadow:'blue 0 0 1px 1px ', '&:hover':{backgroundColor: '#718fca69',},scale:'0.75' }}  aria-label="Delete">
        <EditIcon sx={{color:"#235bc9ff"}}  /> 
      </Fab>

     <Fab size="small" sx={{background:"white",boxShadow:'#41b755ff 0 0 1px 1px ', '&:hover':{backgroundColor: '#7ee3807f',},scale:'0.75' }}  aria-label="Delete">
        <CheckIcon sx={{color:"#41b755ff"}}  /> 
      </Fab>

    </ListItemIcon> 
    
    return(<> {btn} </>

    )
}