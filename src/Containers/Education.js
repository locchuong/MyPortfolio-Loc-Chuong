import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EducationCard from "../Components/EducationCard/EducationCard";
import educationIcon from "../Media/Logos/educationIcon.svg";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15vh",
    marginLeft: "5vw",
    marginRight: "5vw",
  },
  alignText: {
    textAlign: "left",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  headerIcon: {
    filter: "invert(1)",
    marginRight: "1rem",
  },
}));

function Education() {
  const classes = useStyles();
  return (
    <Fade left>
      <div id="education" className={classes.root}>
        <div className={classes.header}>
          <img
            className={classes.headerIcon}
            src={educationIcon}
            alt="educationIcon"
          ></img>
          <Typography className={classes.alignText} variant="h2">
            Education
          </Typography>
        </div>
        <br />
        <EducationCard />
      </div>
    </Fade>
  );
}
export default Education;
