import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AppBarCollapse from "../AppBarCollapse/AppBarCollapse";
import { Fade } from "react-reveal";

function Header() {
  return (
    <Fade top duration={3000}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar disableGutters="true">
          <Typography variant="h3">Portfolio</Typography>
          <AppBarCollapse />
        </Toolbar>
      </AppBar>
    </Fade>
  );
}
export default Header;
