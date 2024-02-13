import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";

export default function Header() {

const countOfProducts = useSelector(state =>  state.cart.products?.length || 0)


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Shop
          </Typography>
          <Badge badgeContent={countOfProducts} color="error">
            <ShoppingCart sx={{cursor: 'pointer'}} ></ShoppingCart>
            </Badge>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
