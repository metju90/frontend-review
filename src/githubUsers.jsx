import React from "react";
import "./githubUsers.css";

export default (props) => {
  const [ghUsers, setGithubUsers] = React.useState([]);

  if (!ghUsers.length) {
    fetch("https://api.github.com/users")
      .then((data) => data.json())
      .then((data) => {
        setGithubUsers(data);
      });
  }

  if (
    ghUsers.length > 0 &&
    props.maxUsers !== null &&
    typeof props.maxUsers === "number" &&
    props.maxUsers > ghUsers.length
  ) {
    setGithubUsers(ghUsers.slice(0, props.maxUsers));
  }

  return ghUsers.map((u) => {
    return (
      <div class="user">
        <div>username: {u.login}</div>
        <img src={u.avatar_url} />
        <div>
          Profile: <a href={u.url}>{u.url}</a>
        </div>
      </div>
    );
  });
};
