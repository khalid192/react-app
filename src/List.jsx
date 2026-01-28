import ListItem from "@mui/material/ListItem";
import { ListContext } from "./conext/InputContext.jsx";
import { useContext, } from "react";
import ListItemText from "@mui/material/ListItemText";
import FreducerList from "./reducer/RedurcerList.jsx"

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import "./index.css";
import Snackbar from "@mui/material/Snackbar";
import Grow from "@mui/material/Grow";
import Alert from "@mui/material/Alert";
import { ListContext2 } from "./reducer/RedurcerList.jsx"
import "./index.css";

export default function ListI() {
  const {
  
    setlist,
    edit,
    setId,
    setedit,
    IsDone,
    inputValue,
    setInputValue,
    state,
    setState,
  } = useContext(ListContext);

const { list, dispatch } = useContext(ListContext2);




  function Delete(id) {
     dispatch({type:'delete',data:id})
  }

  function Edit(id) {
   


    setedit(true), setId(id);
 
  }
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  function CheckF(id) {
    setlist((E) =>
      E.map((itm) =>
        itm.id === id ? { ...itm, checked: itm.checked ? false : true } : itm
      )
    );
  }


  const filteredList = list.filter(
    (item) =>
    ((item.checked === true && IsDone === 2) ||
      (item.checked === false && IsDone === 3) ||
      IsDone === 1),
      

  );

  let listItems = filteredList.map((item) => (
  
    <ListItem
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1px 6px",
        background: item.checked ? "#064516ff" : "#bbb2b2ff",
        marginBottom: " 8px",
        borderRadius: "5px",
        boxShadow: "0 0 5px #ada4a4a5",
      }}
      key={item.id}
    > 
      <div
        className="dd"
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <ListItemIcon sx={{ minWidth: 40, marginLeft: "auto", margin: 0 }}>
          <Fab
            onClick={() => {
              Delete(item.id);
            }}
            size="small"
            sx={{
              background: "white",
              boxShadow: "#c93c23ff 0 0 1px 1px ",
              "&:hover": { backgroundColor: "#d999927c" },
              scale: "0.75",
            }}
            aria-label="Delete"
          >
            <DeleteOutlineIcon sx={{ color: "#c93c23ff" }} />
          </Fab>

          <Fab
            onClick={() => {
              Edit(item.id);
            }}
            size="small"
            sx={{
              background: "white",
              boxShadow: "blue 0 0 1px 1px ",
              "&:hover": { backgroundColor: "#718fca69" },
              scale: "0.75",
            }}
            aria-label="Delete"
          >
            <EditIcon sx={{ color: "#235bc9ff" }} />
          </Fab>

          <Fab
            onClick={() => {
              CheckF(item.id);
            }}
            size="small"
            sx={{
              background: item.checked ? "#56735bff" : "white",
              boxShadow: "#41b755ff 0 0 1px 1px ",
              "&:hover": { backgroundColor: "#7ee3807f" },
              scale: "0.75",
            }}
            aria-label="Delete"
          >
            <CheckIcon sx={{ color: "#41b755ff" }} />
          </Fab>
        </ListItemIcon>
        <ListItemText
          sx={{ direction: "rtl", textAlign: "right" }}
          style={{
            direction: "rtl",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "80%",
            textDecoration: item.checked ? "line-through" : "none",
            color: item.checked ? "gray" : "black",
          }}
        >
          {item.title}
          <p style={{ fontSize: "13px", margin: "0" }}>{item.body}</p>
        </ListItemText>
      </div>
      <Snackbar
        style={{ zIndex: 500000000, padding: 0 }}
        open={state.open}  
        onClose={handleClose}
        slots={{ transition: Grow }}
        autoHideDuration={1200}
      >
        <Alert
          sx={{ margin: 0, fontFamily: "inherit" }}
          variant={state.variant}
          severity={state.severity}
        >
          {state.title}
        </Alert>
      </Snackbar>
    </ListItem>
  ));

  return <>{listItems}</>;
}
