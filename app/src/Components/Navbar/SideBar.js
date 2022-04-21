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
  
  return (
    <Box bgcolor="skyblue"
    flex={1}
    p={2}
    sx={{width: "150px"}}
    > <List  >
        <ListItem disablePadding>
            <ListItemButton >
              
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
