import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 10px 2px #3F3D56",
    borderRadius: "15px",
    opacity: "0.70",
    transition: "transform .2s",
    "&:hover": {
      opacity: "1",
      transform: "scale(1.1)",
    },
    padding: "1rem",
    textAlign: "left",
    height: "30vh",
  },
  cardButton: {
    color: "white",
    backgroundColor: "#171C28",
    border: "1px solid #3F3D56",
    "&:hover": {
      backgroundColor: "#3F3D56",
    },
  },
  cardButtonGroup: {
    marginLeft: "auto",
    marginTop: "auto",
  },
  cardDescription: {
    fontSize: "calc(0.6rem + 0.25vw)",
  },
  cardTitle: {
    fontSize: "calc(1.5rem + 0.25vw)",
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cardHeader}>
        <Typography className={classes.cardTitle} variant="h5">
          {props.title}
        </Typography>
        <br></br>
        <Typography className={classes.cardDescription} variant="p">
          {props.summary}
        </Typography>
      </div>
      <div className={classes.cardButtonGroup}>
        <Button
          className={classes.cardButton}
          target="_blank"
          href={props.liveLink}
        >
          Live
        </Button>
        <Button
          className={classes.cardButton}
          target="_blank"
          href={props.repoLink}
        >
          Repo
        </Button>
      </div>
    </div>
  );
}
