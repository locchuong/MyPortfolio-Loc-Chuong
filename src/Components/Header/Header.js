import React from "react";
import { AppBar, IconButton, Toolbar, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AppBarCollapse from '../AppBarCollapse/AppBarCollapse';

function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar disableGutters="true">
      <Typography variant="h3">
            Portfolio
          </Typography>
        <AppBarCollapse/>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
