import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;

    return (
      <div className="post">
        <div className="post-title">
          <h1>{ entry.getIn(["data", "title"])}</h1>
        </div>

        <div className="post-meta">
          <span className="post-author">
             { entry.getIn(["data", "author"]) }
          </span>
          -
          <span className="post-date">
            { format(entry.getIn(["data", "date"]), "DD/MM/YYYY") }
          </span>
          -
          <span className="read-time">Lectura x min</span>
        </div>

        <div className="post-content">
          <p>
            { entry.getIn(["data", "description"]) }
          </p>

          <p>
            <img src={ entry.getIn(["data", "image"]) } alt="{{ .Title }}" />
          </p>
          { widgetFor("body") }
        </div>
      </div>
    );
  }
}
