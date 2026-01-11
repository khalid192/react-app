import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListContext } from "./conext/InputContext.jsx";
import { useContext } from "react";
import ListItemText from "@mui/material/ListItemText";
import ButtonList from "./buttonList.jsx";


import "./index.css";

export default function ListI() {
    

  const {list ,setlist} = useContext(ListContext);


  let listItems = list.map((item) => (
    <ListItem
      style={{ display: "flex", alignItems: "center", padding: "1px 6px" }}
      key={item.id}
    >
      {" "}
      <ButtonList />{" "}
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
