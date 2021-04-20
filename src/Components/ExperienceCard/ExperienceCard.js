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
            Advised UCSD students on university policies regarding illicit use
            of drugs, alcohol consumption and micro-mobility devices
          </Typography>
        </li>
        <li>
          <Typography className={props.classes.alignText} variant="subtitle1">
            Collaborated closely with Police Officers in incidents of suspicious
            persons, disasters, and medical emergencies
          </Typography>
        </li>
        <li>
          <Typography className={props.classes.alignText} variant="subtitle1">
            Inspected over 30 UCSD affiliated buildings to ensure security
            protocols are up-to-date and logged
          </Typography>
        </li>
      </ul>
    </Grid>
  </Grid>
);

export default withStyles(styles)(ExperienceCard);
