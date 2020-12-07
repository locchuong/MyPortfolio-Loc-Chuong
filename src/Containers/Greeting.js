import React from "react";
import greetingLogo from "../Media/Images/greetingImage.svg";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContactCard from "../Components/ContactCard/ContactCard";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15vh",
    marginLeft: "5vw",
    marginRight: "5vw",
  },
}));

function Greeting() {
  const classes = useStyles();
  return (
    <Fade duration={4000} cascade>
      <div className={classes.root}>
        <Grid container spacing={2} justify="center">
          <Grid item sm={12} md={6}>
            <Typography variant="h1">
              Hi friend! I'm Loc,
            </Typography>
            <br></br>
            <Typography variant="h4">
              A passionate Software Developer with experience in web
              applications using technologies such as Javascript/Reactjs/Nodejs.
            </Typography>
            <ContactCard />
            <Button variant="contained">
                My Resume
            </Button>
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
    </Fade>
  );
}
export default Greeting;
