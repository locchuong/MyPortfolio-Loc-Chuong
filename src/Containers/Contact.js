import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton } from "@material-ui/core/";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import profileImage from "../Media/Images/profileImage.PNG";
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
  contactIcon: {
    color: "white",
    marginLeft: "10px",
    textAlign: "left",
    float: "left",
  },
  contactBtn: {
    fontSize: "50px",
    borderRadius: "100%",
    border: "1px solid white",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.25)",
    },
  },
  profileImage: {
    width: "100%",
    borderRadius: "100%",
    border: "10px solid #AEAAF9",
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <Fade bottom fraction={0.8}>
    <div id="contact" className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item sm={9}>
          <Typography className={classes.alignText} variant="h2">
            Get in touch with me!
          </Typography>
          <br></br>
          <Typography className={classes.alignText} variant="h5">
            Always looking for new opportunities.
          </Typography>
          <br></br>
          <Typography className={classes.alignText} variant="h5">
            Striving to learn and improve.
          </Typography>
          <br></br>
          <Typography className={classes.alignText} variant="h5">
            Aspiring web developer.
          </Typography>
          <br></br>
          <IconButton
            className={classes.contactIcon}
            target="_blank"
            href="https://www.facebook.com/loc.chuong"
            edge="start"
            aria-label="facebook"
          >
            <FacebookIcon
              className={classes.contactBtn}
              style={{ fontSize: "50px" }}
            />
          </IconButton>
          <IconButton
            className={classes.contactIcon}
            target="_blank"
            href="https://github.com/locchuong"
            edge="start"
            aria-label="github"
          >
            <GitHubIcon
              className={classes.contactBtn}
              style={{ fontSize: "50px" }}
            />
          </IconButton>
          <IconButton
            className={classes.contactIcon}
            target="_blank"
            href="mailto:locchuong1999@gmail.com"
            edge="start"
            aria-label="email"
          >
            <EmailIcon
              className={classes.contactBtn}
              style={{ fontSize: "50px" }}
            />
          </IconButton>
        </Grid>
        <Grid item sm={3}>
          <img className={classes.profileImage} src={profileImage} alt="Logo" />
        </Grid>
      </Grid>
    </div>
    </Fade>
  );
}
export default Contact;
