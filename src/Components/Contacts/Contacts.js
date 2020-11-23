/**
 * Code from the below medium post, only updated for latest material UI, using a
 * Menu for the popup and with breakpoints that work.
 *
 * https://medium.com/@habibmahbub/create-appbar-material-ui-responsive-like-bootstrap-1a65e8286d6f
 */
import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import {IconButton} from "@material-ui/core/";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
const styles = (theme) => ({
  facebook: {
    color: "white",
  },
  github: {
    color: "white",
  }

});

const Contacts = (props) => (
  <div className={props.classes.root}>
      <Grid> 
      <IconButton
          className={props.classes.facebook}
          target="_blank"
          href="https://www.facebook.com/loc.chuong"
          edge="start"
          aria-label="facebook"
        >
          <FacebookIcon style={{fontSize: "50px"}}/>
        </IconButton>
        <IconButton
          className={props.classes.github}
          target="_blank"
          href="https://github.com/locchuong"
          edge="start"
          aria-label="github"
        >
          <GitHubIcon style={{fontSize: "40px"}}/>
        </IconButton>
        <IconButton
          className={props.classes.github}
          target="_blank"
          href="mailto:locchuong1999@gmail.com"
          edge="start"
          aria-label="email"
        >
          <EmailIcon style={{fontSize: "50px"}}/>
        </IconButton>
      </Grid>
  </div>
);

export default withStyles(styles)(Contacts);
