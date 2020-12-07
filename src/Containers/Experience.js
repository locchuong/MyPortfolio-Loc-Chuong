import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExperienceCard from "../Components/ExperienceCard/ExperienceCard";
import experienceIcon from "../Media/Logos/experienceIcon.svg";
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

function Experience() {
  const classes = useStyles();
  return (
    <Fade left fraction={0.8}>
      <div id="experience" className={classes.root}>
        <div className={classes.header}>
          <img
            className={classes.headerIcon}
            src={experienceIcon}
            alt="experienceIcon"
          ></img>
          <Typography className={classes.alignText} variant="h2">
            Experience
          </Typography>
        </div>
        <br />
        <ExperienceCard />
      </div>
    </Fade>
  );
}
export default Experience;
