import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import ucpdImage from "../../Media/Images/ucpdImage.svg";

const styles = (theme) => ({
  schoolCard: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    display: "inline-flex",
    borderBottom: "5px solid #AEAAF9",
  },
  alignText: {
    verticalAlign: "center",
    textAlign: "left",
    marginLeft: "20px",
  },
});

const ExperienceCard = (props) => (
  <Grid
    className={props.classes.schoolCard}
    container
    spacing={0}
    justify="flex-star"
    alignItems="flex-start"
  >
    <Grid item xs={1}>
      <img
        src={ucpdImage}
        alt="Logo"
        style={{ filter: "invert(1)", pointerEvents: "none", width: "100%" }}
      />
    </Grid>
    <Grid item xs={11}>
      <Typography className={props.classes.alignText} variant="h4">
        Community Service Officer
      </Typography>
      <Typography className={props.classes.alignText} variant="h5">
        University of San Diego, California
      </Typography>
      <Typography className={props.classes.alignText} variant="h6">
        Feburary 2019 - Present
      </Typography>
      <ul>
        <li>
          <Typography className={props.classes.alignText} variant="subtitle1">
            Advised UCSD students on university policies regarding the illicit
            use of drugs and alcohol consumption and micro-mobility devices
          </Typography>
        </li>
        <li>
          <Typography className={props.classes.alignText} variant="subtitle1">
            Escorted UCSD students during off-peak hours
          </Typography>
        </li>
        <li>
          <Typography className={props.classes.alignText} variant="subtitle1">
            Patrolled and locked up UCSD affiliated buildings
          </Typography>
        </li>
        <li>
          <Typography className={props.classes.alignText} variant="subtitle1">
            Controlled traffic in areas of contruction on UCSD campus
          </Typography>
        </li>
      </ul>
    </Grid>
  </Grid>
);

export default withStyles(styles)(ExperienceCard);
