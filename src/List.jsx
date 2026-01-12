import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListContext } from "./conext/InputContext.jsx";
import { useContext } from "react";
import ListItemText from "@mui/material/ListItemText";
import ButtonList from "./buttonList.jsx";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';


import "./index.css";

export default function ListI() {

    
     
  const {list ,setlist ,edit, setedit} = useContext(ListContext);
function Delete (id){ setlist((e)=>e.filter(item => item.id !== id)) }

function Edit (id){ setedit(true) ,setId(id)}

  let listItems = list.map((item) => (
    <ListItem
      style={{ display: "flex", alignItems: "center", padding: "1px 6px" }}
      key={item.id}
    >
  
      <ListItemIcon sx={{ minWidth: 40, marginLeft: 'auto',margin:0 }}>
     
          
   
          <Fab  onClick={()=>{Delete(item.id)}}  size="small" sx={{background:"white",boxShadow:'#c93c23ff 0 0 1px 1px ', '&:hover':{backgroundColor: '#d999927c',},scale:'0.75' }}  aria-label="Delete">
            <DeleteOutlineIcon  sx={{color:"#c93c23ff"}}  /> 
          </Fab>
    
         <Fab onClick={()=>{Edit(item.id)}} size="small" sx={{background:"white",boxShadow:'blue 0 0 1px 1px ', '&:hover':{backgroundColor: '#718fca69',},scale:'0.75' }}  aria-label="Delete">
            <EditIcon sx={{color:"#235bc9ff"}}  /> 
          </Fab>
    
         <Fab size="small" sx={{background:"white",boxShadow:'#41b755ff 0 0 1px 1px ', '&:hover':{backgroundColor: '#7ee3807f',},scale:'0.75' }}  aria-label="Delete">
            <CheckIcon sx={{color:"#41b755ff"}}  /> 
          </Fab>
    
        </ListItemIcon> 
      <ListItemText
        sx={{ direction: "rtl", textAlign: "right" }}
        style={{
          direction: "rtl",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {item.title}
        <p>{item.body}</p>
      </ListItemText>
    </ListItem>
  ));

  return <>{listItems}</>;
}
