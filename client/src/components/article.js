import React, { Component } from "react";
import axios from "axios";

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string;
    }
  }

  componentDidMount() {
    axios
      .get(
        "http://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts/" +
          this.props.match.params.id
      )
      .then(res => {
        console.log(res);

        this.setState({ post: res.data });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.post) {
      return (
        <div className="blog">
          <div className="article">
            {this.state.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.state.post.featured_image}
              />
            ) : (
              ""
            )}
            <h1 className="text-center">{this.state.post.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: this.state.post.content }}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
