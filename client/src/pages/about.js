import React from "react";
import "../index.css";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="anchor" id="about" />
        <h1 className="sectionTitle">About Me</h1>
        <div className="twocols">
          <div className="aboutText">
            <h3>
              I'm a JavaScript developer with commercial experience with Angluar
              4, NodeJS and D3 data visualisation. Pervious projects that I have
              worked on include creating a charting micro-service, expanding the
              functionality of an existing CRUD API.
            </h3>
            <h2>
              {" "}
              JavaScript Web Developer - NodeJS API Developer - Tech Writer{" "}
            </h2>
          </div>
          <div id="porfileimg">
            <img
              className="circle"
              alt="Sam Williams"
              src="https://avatars3.githubusercontent.com/u/23235923?s=400&u=15ddbbc0fedc59618a1f65f613292082cefa51c2&v=4"
            />
          </div>
        </div>
        <div className="Skills">
          <h3>Skills</h3>
          <div className="twocols">
            <div className="projs">
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React and Redux</li>
                <li>Angular 4</li>
              </ul>
            </div>
            <div className="projs">
              <ul>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>Mocha</li>
                <li>D3 Data Visualisation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
