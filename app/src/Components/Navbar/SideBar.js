import React from 'react'
import { Box } from "@mui/system";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Home from '@mui/icons-material/Home';
import { useEffect } from "react";
import { useState } from "react";
const SideBar = () => {
  const [lists, setLists] = useState([]);
  console.log(lists);
  useEffect(() => {
    getMensData();
  }, []);

  const getMensData = () => {
    fetch("http://localhost:3003/mens")
      .then((d) => d.json())
      .then((res) => {
        setLists(res);
      });
  };
  const filterItem=(category)=>{
    const updatedList= lists.filter((currElem)=>{
       return currElem.Category===category;
     })
     setLists(updatedList);
    
   }
  return (
    <Box bgcolor="skyblue"
    flex={1}
    p={2}
    sx={{width: "150px"}}
    > <List  >
        <ListItem disablePadding>
            <ListItemButton onClick={()=>filterItem("Shirts")}>
              
              <ListItemText primary="Shirts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              
              <ListItemText primary="Jeans" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              
              <ListItemText primary="Kurta" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
             
              <ListItemText primary="500-1000" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
             
              <ListItemText primary="Color" />
            </ListItemButton>
          </ListItem>
      </List>
     
    </Box>
  )
}

export default SideBar
