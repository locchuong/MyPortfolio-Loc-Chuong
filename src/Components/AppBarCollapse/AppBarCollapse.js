/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react";
import { Button, Typography} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AppBarBtnCollapse from "./AppBarBtnCollapse/AppBarBtnCollapse";
const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  collapseBtn: {
      '&:hover': {
        backgroundColor: '#3a4766',
      }
  },
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <AppBarBtnCollapse/>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button className={props.classes.collapseBtn} href="#skills" color="inherit">
          <Typography>

          </Typography>
          Skills
          </Button>
      <Button className={props.classes.collapseBtn} href="#projects" color="inherit">Projects</Button>
      <Button className={props.classes.collapseBtn} href="#experience" color="inherit">Work Experience</Button>
      <Button className={props.classes.collapseBtn} href="#contact" color="inherit">Contact Me</Button>
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
