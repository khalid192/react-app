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

    
     
  const {list ,setlist ,edit,setId, setedit} = useContext(ListContext);
function Delete (id){ setlist((e)=>e.filter(item => item.id !== id)) }

function Edit (id){ setedit(true) ,setId(id)}


    function CheckF(id){

      setlist((E) =>
      E.map((itm) =>
        itm.id === id ? { ...itm,checked: itm.checked ? false : true}  : itm
      )
    );
    }

  let listItems = list.map((item) => (
    <ListItem
      style={{ display: "flex", alignItems: "center", padding: "1px 6px",background:item.checked?'#064516ff':'#bbb2b2ff',marginBottom:' 8px',borderRadius:'5px',boxShadow:'0 0 5px #ada4a4a5' }}
      key={item.id}
    >
  
      <ListItemIcon sx={{ minWidth: 40, marginLeft: 'auto',margin:0 }}>
     
          
   
          <Fab  onClick={()=>{Delete(item.id)}}  size="small" sx={{background:"white",boxShadow:'#c93c23ff 0 0 1px 1px ', '&:hover':{backgroundColor: '#d999927c',},scale:'0.75' }}  aria-label="Delete">
            <DeleteOutlineIcon  sx={{color:"#c93c23ff"}}  /> 
          </Fab>
    
         <Fab onClick={()=>{Edit(item.id)}} size="small" sx={{background:"white",boxShadow:'blue 0 0 1px 1px ', '&:hover':{backgroundColor: '#718fca69',},scale:'0.75' }}  aria-label="Delete">
            <EditIcon sx={{color:"#235bc9ff"}}  /> 
          </Fab>
    
         <Fab onClick={()=>{CheckF(item.id)}}  size="small" sx={{background:item.checked?'#56735bff':'white',boxShadow:'#41b755ff 0 0 1px 1px ', '&:hover':{backgroundColor: '#7ee3807f',},scale:'0.75' }}  aria-label="Delete">
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
        <p style={{fontSize:'13px',margin:'0'}}>{item.body}</p>
      </ListItemText>
    </ListItem>
  ));

  return <>{listItems}</>;

}
