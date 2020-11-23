import React from "react";
import { AppBar, IconButton, Toolbar, List, ListItem, ListItemText} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AppBarCollapse from '../AppBarCollapse/AppBarCollapse';

function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar disableGutters="true">
        <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon fontSize="large"/>
        </IconButton>
        <AppBarCollapse/>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
