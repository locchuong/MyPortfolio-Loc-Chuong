import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import educationImage from "../../Media/Images/educationImage.svg";

import EducationCard from "../../Components/EducationCard/EducationCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15vh",
  },
  whiteText: {
    color: "#FFFFFF",
  },
}));

function Education() {
  const classes = useStyles();
  return (
    <div id="education" className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={12} md={6}>
          <img
            src={educationImage}
            alt="Logo"
            style={{ pointerEvents: "none", width: "80%" }}
          />
        </Grid>
        <Grid item sm={12} md={6}>
        <Typography className={classes.whiteText} variant="h2">
            Education
          </Typography>
          <br></br>
          <EducationCard/>
        </Grid>
      </Grid>
    </div>
  );
}
export default Education;
