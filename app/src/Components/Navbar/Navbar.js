import styled from "@emotion/styled";
import { AppBar, Avatar, InputBase, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Box } from "@mui/system";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
 width:"40%"
   
}))
const Icons=styled(Box)(({theme})=>({
    backgroundColor:"white",
   
}))

const Navbar = () => {
    const [open,setOpen]=useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
      <Avatar sx={{width:50, height:50}} src="https://images.indianexpress.com/2021/01/myntra.png"/>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Men
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Women
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Kids
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Home & Living
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Beauty
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Studio
        </Typography>
   
   <Search><InputBase placeholder="search..."/></Search>
   
   <PermIdentityIcon onClick={e=>setOpen(true)}/>
  
   <FavoriteBorderIcon/>
   <ShoppingBagIcon/>
   <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
         open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar>
      
    </AppBar>
  );
};

export default Navbar;
