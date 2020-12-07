import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import ucsdImage from "../../Media/Images/ucsdImage.svg";

const styles = (theme) => ({
  schoolCard: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    display: "inline-flex",
    borderBottom: "5px solid #AEAAF9"
  },
  alignText: {
    verticalAlign: "center",
    textAlign: "left",
    marginLeft: "20px",
  },
});

const EducationCard = (props) => (
    <Grid
      className={props.classes.schoolCard}
      container
      spacing={0}
      justify="flex-star"
      alignItems="flex-start"
    >
      <Grid item xs={1}>
        <img
          src={ucsdImage}
          alt="Logo"
          style={{ pointerEvents: "none", width: "100%" }}
        />
      </Grid>
      <Grid item xs={11}>
        <Typography className={props.classes.alignText} variant="h4">
          University of San Diego, California
        </Typography>
        <Typography className={props.classes.alignText} variant="h5">
          Bachelor of Science in Math/Computer Science | Minor in Business
        </Typography>
        <Typography className={props.classes.alignText} variant="h6">
          September 2017 - June 2021
        </Typography>
        <Typography className={props.classes.alignText} variant="h6">
          Cumulative GPA: 3.42 | Major GPA: 3.5
        </Typography>
        <ul>
          <li>
            <Typography className={props.classes.alignText} variant="subtitle1">
              Involved in Alpha Phi Omega, a national coed service fraternity
              founded on Leadership, Friendship, and Service
            </Typography>
          </li>
          <li>
            <Typography className={props.classes.alignText} variant="subtitle1">
              Involved in VSA, a club dedicated to promoting and spreading
              Vietnamese culture
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
);

export default withStyles(styles)(EducationCard);
