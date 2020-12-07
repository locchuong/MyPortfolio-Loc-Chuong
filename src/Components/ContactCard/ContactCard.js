import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton } from "@material-ui/core/";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  contactIcon: {
    color: "white",
    marginLeft: "10px",
  },
  contactBtn: {
    fontSize: "50px",
    borderRadius: "100%",
    border: "1px solid white",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.25)",
    },
  },
});

const Contacts = (props) => (
  <div className={props.classes.root}>
      <IconButton
        className={props.classes.contactIcon}
        target="_blank"
        href="https://www.facebook.com/loc.chuong"
        edge="start"
        aria-label="facebook"
      >
        <FacebookIcon
          className={props.classes.contactBtn}
          style={{ fontSize: "50px" }}
        />
      </IconButton>
      <IconButton
        className={props.classes.contactIcon}
        target="_blank"
        href="https://github.com/locchuong"
        edge="start"
        aria-label="github"
      >
        <GitHubIcon
          className={props.classes.contactBtn}
          style={{ fontSize: "50px" }}
        />
      </IconButton>
      <IconButton
        className={props.classes.contactIcon}
        target="_blank"
        href="mailto:locchuong1999@gmail.com"
        edge="start"
        aria-label="email"
      >
        <EmailIcon
          className={props.classes.contactBtn}
          style={{ fontSize: "50px" }}
        />
      </IconButton>
  </div>
);

export default withStyles(styles)(Contacts);
