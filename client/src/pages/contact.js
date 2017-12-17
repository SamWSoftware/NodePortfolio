import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="anchor" id="contact" />
        <h1 className="sectionTitle">Contact</h1>
        <hr />
        <p> Hi there </p>
        <p>
          If you would like to ask me a question, enquire about some work or
          just say hi, drop me an email at samwcoding@gmail.com or send me{" "}
          <a href="https://twitter.com/SamWSoftwares">a tweet</a>.
        </p>
        <p>I'm looking forward to hearing from you.</p>
      </div>
    );
  }
}
