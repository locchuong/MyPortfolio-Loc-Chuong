import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import ucsdImage from "../../Media/Images/ucsdImage.svg";
const styles = (theme) => ({
  schoolCard: {
    width: "100%",
    height: "100%",
    border: "1px solid green",
    flexDirection: "row",
    display: "inline-flex",
  },
  schoolCardLeft: {
    flexGrow: "3",
  },
  schoolCardRight: {
    flexGrow: "1",
  },
  whiteText: {
    color: "white",
    verticalAlign: "center",
    textAlign: "center",
  },
});

const EducationCard = (props) => (
  <div className={props.classes.root}>
    <Grid container spacing={2} justify="center">
      <Grid item xs={2} className={props.classes.schoolCard}>
        <img
          src={ucsdImage}
          alt="Logo"
          style={{ pointerEvents: "none", width: "100%" }}
        />
      </Grid>
      <Grid item xs={10} className={props.classes.schoolCard}>
        <Typography className={props.classes.whiteText} variant="h4">
          University of San Diego, California
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(EducationCard);
