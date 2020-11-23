import React from "react";
import skillsLogo from "../../Media/skillsLogo.svg";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from "@material-ui/icons/Code";
import htmlIcon from "../../Media/htmlIcon.svg";
import cssIcon from "../../Media/cssIcon.svg";
import jsIcon from "../../Media/jsIcon.svg";
import reactIcon from "../../Media/reactIcon.svg";
import nodeIcon from "../../Media/nodeIcon.svg";
import npmIcon from "../../Media/npmIcon.svg";
import firebaseIcon from "../../Media/firebaseIcon.svg";
import herokuIcon from "../../Media/herokuIcon.svg";
import CplusplusIcon from "../../Media/C++Icon.svg";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15vh",
  },
  whiteText: {
    color: "#FFFFFF",
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <div id="skills" className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={12} md={6}>
          <img
            src={skillsLogo}
            alt="Logo"
            style={{ pointerEvents: "none", width: "80%" }}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography className={classes.whiteText} variant="h2">
            <CodeIcon
              style={{
                fontSize: "50px",
                marginRight: "15px",
              }}
            />
            Programming Skills
          </Typography>
          <br />
          <img src={cssIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={htmlIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={jsIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={reactIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={nodeIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={npmIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={firebaseIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={herokuIcon} alt="Logo" style={{ marginRight: "15px" }} />
          <img src={CplusplusIcon} alt="Logo" style={{ marginRight: "15px" }} />

        </Grid>
      </Grid>
    </div>
  );
}
export default Skills;
