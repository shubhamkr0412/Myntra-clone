import React from 'react'
import { Box } from "@mui/system";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Home from '@mui/icons-material/Home';
const SideBar = () => {
  return (
    <Box bgcolor="skyblue"
    flex={1}
    p={2}
    sx={{width: "100px"}}
    > <List  >
        <ListItem disablePadding>
            <ListItemButton>
              
              <ListItemText primary="Men" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              
              <ListItemText primary="Women" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
             
              <ListItemText primary="Boys" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
             
              <ListItemText primary="Girls" />
            </ListItemButton>
          </ListItem>
      </List>
     
    </Box>
  )
}

export default SideBar
