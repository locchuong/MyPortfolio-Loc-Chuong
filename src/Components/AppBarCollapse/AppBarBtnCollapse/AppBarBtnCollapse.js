import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";
import { MenuItem } from "@material-ui/core";

const styles = (theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuItemLink: {
    textDecoration: 'none',
    color: 'black',
    '&:visited': {
        textDecoration: 'none',
        color: 'black'
    },
}
});

class AppBarBtnCollapse extends Component {
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
      <div className={classes.buttonCollapse}>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="home"
          onClick={this.handleMenu}
        >
          <ListIcon fontSize="large" />
        </IconButton>
        <Menu
          className={classes.buttonCollapse}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <a className={classes.menuItemLink} href="#skills">Skills</a>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <a className={classes.menuItemLink} href="#projects">Projects</a>
          </MenuItem>
          <MenuItem  onClick={this.handleClose}>
            <a className={classes.menuItemLink} href="#experience">Work Experience</a>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <a className={classes.menuItemLink} href="#contact">Contact Me</a>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
export default withStyles(styles)(AppBarBtnCollapse);
