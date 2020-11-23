import React, { Component } from "react";
import "./Main.css";
import Header from "../Components/Header/Header";
import Greeting from "./Greeting/Greeting";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Greeting/>
        <Skills/>
        <Projects/>
        <Education/>
      </div>
    );
  }
}
