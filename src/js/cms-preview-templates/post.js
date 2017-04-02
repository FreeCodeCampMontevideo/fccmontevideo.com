import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;
    const stringUserData = localStorage.getItem("netlify-cms-user");
    const user = stringUserData && JSON.parse(stringUserData);

    return (
      <div className="post">
        <div className="post-title">
          <h1>{ entry.getIn(["data", "title"])}</h1>
        </div>

        <div className="post-meta" style={{marginRight: 10}}>
          <span className="post-author" style={{marginRight: 10}}>
            <img className="author-avatar" style={{marginRight: 5}} src={user.avatar_url} alt="" />
            { entry.getIn(["data", "author"]) }
          </span>
          -
          <span className="post-date" style={{margin: "0 10px"}}>
            { format(entry.getIn(["data", "date"]), "DD/MM/YYYY") }
          </span>
          -
          <span className="read-time" style={{marginLeft: 10}}>Lectura x min</span>
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
