import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import educationImage from "../../Media/Images/educationImage.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15vh",
  },
  whiteText: {
    color: "#FFFFFF",
    textAlign:"left",
    marginLeft:"50px",
    // REMOVE THIS @@@@@@@@@@@@@@@@@@@@@@@@@
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <div id="projects" className={classes.root}>
      <Typography className={classes.whiteText} variant="h2">
        Projects
      </Typography>
      <br/>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={6} md={3}>
          <img
            src={educationImage}
            alt="Logo"
            style={{ pointerEvents: "none", width: "80%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src={educationImage}
            alt="Logo"
            style={{ pointerEvents: "none", width: "80%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src={educationImage}
            alt="Logo"
            style={{ pointerEvents: "none", width: "80%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <img
            src={educationImage}
            alt="Logo"
            style={{ pointerEvents: "none", width: "80%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Projects;
