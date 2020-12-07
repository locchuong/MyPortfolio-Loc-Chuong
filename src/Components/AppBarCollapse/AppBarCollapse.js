import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";
import { MenuItem } from "@material-ui/core";

import { Button } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  smAppBarCollapse: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mdAppBarCollapse: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
  menuItemLink: {
    textDecoration: "none",
    color: "white",
    "&:visited": {
      textDecoration: "none",
      color: "white",
    },
  },
  navBtn: {
    "&:hover": {
      backgroundColor: "#3a4766",
      color: "white",
    },
  },
});

class AppBarCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <div className={classes.smAppBarCollapse}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="home"
            onClick={this.handleMenu}
          >
            <ListIcon fontSize="large" />
          </IconButton>
          <Menu
            className={classes.btnCollapse}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={this.handleClose}
          >
            <a className={classes.menuItemLink} href="#skills">
              <MenuItem onClick={this.handleClose}>Skills</MenuItem>
            </a>
            <a className={classes.menuItemLink} href="#projects">
              <MenuItem onClick={this.handleClose}>Projects</MenuItem>
            </a>
            <a className={classes.menuItemLink} href="#education">
              <MenuItem onClick={this.handleClose}>Education</MenuItem>
            </a>
            <MenuItem onClick={this.handleClose}>
              <a className={classes.menuItemLink} href="#experience">
                Work Experience
              </a>
            </MenuItem>
            <a className={classes.menuItemLink} href="#contact">
              <MenuItem onClick={this.handleClose}>Contact Me</MenuItem>
            </a>
          </Menu>
        </div>
        <div className={classes.mdAppBarCollapse}>
          <Button className={classes.navBtn} variant="outlined" href="#skills">
            Skills
          </Button>
          <Button
            className={classes.navBtn}
            variant="outlined"
            href="#projects"
          >
            Projects
          </Button>
          <Button
            className={classes.navBtn}
            variant="outlined"
            href="#education"
          >
            Education
          </Button>
          <Button
            className={classes.navBtn}
            variant="outlined"
            href="#experience"
          >
            Work Experience
          </Button>
          <Button className={classes.navBtn} variant="outlined" href="#contact">
            Contact Me
          </Button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(AppBarCollapse);
