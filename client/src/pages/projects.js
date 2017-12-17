import React from "react";
import "../index.css";
import wikiview from "../pictures/wikiview.png";
import mdPreview from "../pictures/mdPreview.png";
import goalCoach from "../pictures/goalCoach.png";
import reminderPro from "../pictures/ReminderPro.png";
import hemingway from "../pictures/hemingway.png";

import Project from "../components/project";

export default class Projects extends React.Component {
  render() {
    const projects = [
      {
        link: "https://samwsoftware.github.io/Projects/goal-coach/build/",
        alt: "Goal Coach - group goal tracking app",
        image: goalCoach,
        title: "Goal Coach - group goal tracking app",
        course: (
          <a href="https://www.udemy.com/react-js-and-redux-mastering-web-apps">
            (course)
          </a>
        ),
        description:
          "An app that lets users sign up, add new goals, mark goals as complete and delete completed goals. It's powered by Firebase for storage and user creation and logging in."
      },
      {
        link: "https://samwsoftware.github.io/Projects/hemingway/",
        alt: "Copy of the Hemingway Editor",
        image: hemingway,
        title: "Hemingway editor reproduction",
        description:
          "An app that highlights ways that you can simplify your writing. Highlighting adverbs, qualifying words, complex words, dificult and very dificult sentences. Built using vanila JavaScript."
      },
      {
        link:
          "https://samwsoftware.github.io/Projects/wikiviewer/wikiview.html",
        alt: "Wikipedia Search Site",
        image: wikiview,
        title: "Wikipedia Search site",
        description:
          "A site that allows a user to search wikipedia using the Wikipedia API."
      },
      {
        link: "https://samwsoftware.github.io/Projects/mdPreview/build/",
        alt: "Mark Down Previewer",
        image: mdPreview,
        title: "Markdown Previewer with file upload functionality",
        description:
          "A text editor that lets the user visualise markdown text in real time. It also support drag-and-drop uploading of files."
      },
      {
        link: "https://samwsoftware.github.io/Projects/ReminderPro/build/",
        alt: "Reminder app",
        image: reminderPro,
        title: "Reminder app with countdown",
        course: (
          <a href="https://www.udemy.com/node-with-react-fullstack-web-development">
            {" "}
            (course)
          </a>
        ),
        description:
          "This app allows the user to add tasks to a reminder list with a date and time. The tasks are displayed with the time until completion. All tasks are stored "
      }
    ];

    let projList = projects.map(proj => (
      <Project
        link={proj.link}
        alt={proj.alt}
        image={proj.image}
        title={proj.title}
        course={proj.course}
        description={proj.description}
      />
    ));

    return (
      <div className="portfolio">
        <div className="anchor" id="projects" />
        <h1 className="sectionTitle h1">Portfolio</h1>

        <div className="twocols">
          <div id="projs">
            {projList.slice(0, Math.round(projList.length / 2))}
          </div>
          <div id="projs">
            {projList.slice(Math.round(projList.length / 2))}
          </div>
        </div>
        <h3 className="text-center bot h3">
          <a href="https://github.com/SamWCoding/Projects">
            See all of my project code
          </a>
        </h3>
      </div>
    );
  }
}
