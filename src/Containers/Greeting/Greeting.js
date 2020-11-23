import React from "react";
import greetingLogo from "../../Media/Images/greetingImage.svg";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Greeting.css";
import Contacts from "../../Components/Contacts/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "10vh",
  },
  whiteText: {
    color: "#FFFFFF",
  },
}));

function Greeting() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={12} md={6}>
          <Typography className={classes.whiteText} variant="h1">
            Hi friends, I'm Loc
          </Typography>
          <br></br>
          <Typography className={classes.whiteText} variant="h4">
            A passionate Software Developer with experience in web applications
            using technologies such as Javascript/Reactjs/Nodejs.
          </Typography>
          <Contacts />
        </Grid>
        <Grid item sm={12} md={6}>
          <img
            src={greetingLogo}
            alt="Logo"
            style={{ pointerEvents: "none", width: "80%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Greeting;
