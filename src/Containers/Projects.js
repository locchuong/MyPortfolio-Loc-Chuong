import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import projectIcon from "../Media/Logos/projectIcon.svg";
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

function Projects() {
  const classes = useStyles();
  return (
    <Fade left>
      <div id="projects" className={classes.root}>
        <div className={classes.header}>
          <img
            className={classes.headerIcon}
            src={projectIcon}
            alt="projectIcon"
          ></img>
          <Typography className={classes.alignText} variant="h2">
            Projects
          </Typography>
        </div>
        <br />
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6} md={3}>
            <ProjectCard
              title="Pathfinding Visualizer"
              summary="A ReactJS web app for visualizing pathfinding algorithmns such as Dijkstra's, A* search, BFS, and DFS."
              liveLink="https://pathfinding-visualizer-react.herokuapp.com/"
              repoLink="https://github.com/locchuong/Pathfinding-Visualizer"
            ></ProjectCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectCard
              title="Sorting Visualizer"
              summary="A ReactJS web app for visualizing sorting algorithms such as Merge, Quick, Heap, Bubble, Selection, and Shell sort."
              liveLink="https://reactjs-sorting-visualizer.herokuapp.com/"
              repoLink="https://github.com/locchuong/sorting-visualizer"
            ></ProjectCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectCard
              title="FriendTrip"
              summary="A ReactJS web app designed to make planning and going on trips with your friends effortless. Frontend built with React-Router & Bootstrap. Backend built with NodeJS, Express, & Firebase."
              liveLink="https://friendtrip-cse110.herokuapp.com/"
              repoLink="https://github.com/declansullivan/friendtrip"
            ></ProjectCard>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProjectCard
              title="Procedural Terrain"
              summary="A ThreeJS web app for visualizing noise functions as terrain. Implemented a responsive GUI using dat.gui, a lightweight controller library."
              liveLink="https://github.com/locchuong"
              repoLink="https://github.com/locchuong"
            ></ProjectCard>
          </Grid>
        </Grid>
      </div>
    </Fade>
  );
}
export default Projects;
