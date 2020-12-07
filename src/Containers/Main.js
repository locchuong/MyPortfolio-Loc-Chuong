import React, { Component } from "react";

// Import Components and Containers
import Header from "../Components/Header/Header";
import Greeting from "./Greeting";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import "./Main.css";
// import { Fade } from "react-reveal";


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Projects />
        <Education/>
        <Experience/>
        <Contact/>
        <ScrollToTop />
      </div>
    );
  }
}
