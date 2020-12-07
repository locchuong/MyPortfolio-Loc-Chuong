import React from "react";

import skillsLogo from "../Media/Images/skillsImage.svg";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Import Logos
import CodeIcon from "@material-ui/icons/Code";
import htmlIcon from "../Media/Logos/htmlIcon.svg";
import cssIcon from "../Media/Logos/cssIcon.svg";
import jsIcon from "../Media/Logos/jsIcon.svg";
import reactIcon from "../Media/Logos/reactIcon.svg";
import nodeIcon from "../Media/Logos/nodeIcon.svg";
import npmIcon from "../Media/Logos/npmIcon.svg";
import firebaseIcon from "../Media/Logos/firebaseIcon.svg";
import herokuIcon from "../Media/Logos/herokuIcon.svg";
import CplusplusIcon from "../Media/Logos/C++Icon.svg";
import muiIcon from "../Media/Logos/muiIcon.svg";
import vscodeIcon from "../Media/Logos/vscodeIcon.svg";
import githubIcon from "../Media/Logos/githubIcon.svg";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "20vh",
    marginLeft: "5vw",
    marginRight: "5vw",
  },
  skillList: {
    listStyleType: "none",
  },
  skillListItem: {
    display: "inline-block",
    marginLeft: "15px",
    marginTop: "10px",
    "&:hover": {
      position: "relative",
      bottom: "5px",
    },
  },
  skillText: {
    display: "block",
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <Fade fraction={0.9}>
    <div id="skills" className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={12} md={8}>
            <img
              src={skillsLogo}
              alt="Logo"
              style={{ pointerEvents: "none", width: "80%" }}
            />
        </Grid>
        <Grid item sm={12} md={4}>
            <Typography variant="h2">
              <CodeIcon
                style={{
                  fontSize: "50px",
                  marginRight: "15px",
                }}
              />
              Programming Skills
            </Typography>
            <br />
            <ul className={classes.skillList}>
              <li className={classes.skillListItem}>
                <img src={cssIcon} alt="cssIcon" />
                <Typography className={classes.skillText} variant="p">
                  CSS
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={htmlIcon} alt="htmlIcon" />
                <Typography className={classes.skillText} variant="p">
                  HTML
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={jsIcon} alt="jsIcon" />
                <Typography className={classes.skillText} variant="p">
                  JavaScript
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={reactIcon} alt="reactIcon" />
                <Typography className={classes.skillText} variant="p">
                  ReactJS
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={nodeIcon} alt="nodeIcon" />
                <Typography className={classes.skillText} variant="p">
                  Node
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={npmIcon} alt="npmIcon" />
                <Typography className={classes.skillText} variant="p">
                  NPM
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={firebaseIcon} alt="firebaseIcon" />
                <Typography className={classes.skillText} variant="p">
                  FireBase
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={herokuIcon} alt="herokuIcon" />
                <Typography className={classes.skillText} variant="p">
                  Heroku
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={CplusplusIcon} alt="CplusplusIcon" />
                <Typography className={classes.skillText} variant="p">
                  C++
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={muiIcon} alt="muiIcon" />
                <Typography className={classes.skillText} variant="p">
                  Material-UI
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={vscodeIcon} alt="vscodeIcon" />
                <Typography className={classes.skillText} variant="p">
                  VSCode
                </Typography>
              </li>
              <li className={classes.skillListItem}>
                <img src={githubIcon} alt="githubIcon" />
                <Typography className={classes.skillText} variant="p">
                  GitHub
                </Typography>
              </li>
            </ul>
        </Grid>
      </Grid>
    </div>
    </Fade>

  );
}
export default Skills;
