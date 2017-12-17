import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class ArticlePreview extends Component {
  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...");
    }
  }

  render() {
    const excerpt = this.removeUnicode(this.props.post.excerpt);

    if (this.props.post) {
      return (
        <div className="article">
          <h1 className="text-center">{this.props.post.title}</h1>
          <a href={"/blog/" + this.props.post.ID} className="blackLink">
            {this.props.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.props.post.featured_image}
              />
            ) : (
              ""
            )}
            <div className="content">{excerpt}</div>
          </a>
          <HashLink to={"/blog/" + this.props.post.ID}>
            <button className="btn">Read More</button>
          </HashLink>
        </div>
      );
    } else {
      return null;
    }
  }
}
