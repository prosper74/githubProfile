import "./header.scss";
import { Room, Today, ArrowBack } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {
  UitGithubAlt,
  UitLinkedinAlt,
  UitTwitterAlt,
} from "@iconscout/react-unicons-thinline";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  const backHome = () => {
    window.location.replace("/");
  };

  return (
    <div className="header">
      <div className="headerTop">
        <div className="headerSocials">
          <a
            href={user.url}
            target="_blank"
            rel="noreferrer"
            className="socialIcons"
          >
            <UitGithubAlt />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="socialIcons"
          >
            <UitLinkedinAlt />
          </a>
          <a
            href={"https://twitter.com/" + user.twitterUsername}
            target="_blank"
            rel="noreferrer"
            className="socialIcons"
          >
            <UitTwitterAlt />
          </a>
        </div>

        <img src={user.avatarUrl} alt="" />
      </div>

      <h1 className="githubName">Hi, I am {user.name}</h1>
      <h4>@{user.login}</h4>
      <p>{user.bio}</p>

      <div className="info">
        <Today className="infoIcon" /> Joined: &nbsp;
        {new Date(user.createdAt).toDateString()}
        <Room className="infoIcon lastChild" />
        {user.location}
      </div>

      <div className="repoInfo">
        <div className="circleShape">
          <div className="number">{user.repositories.nodes.length}</div>
          Repository
        </div>
        <div className="circleShape center">
          <div className="number">{user.followers.totalCount}</div>
          Followers
        </div>
        <div className="circleShape">
          <div className="number">{user.following.totalCount}</div>
          Following
        </div>
      </div>

      <IconButton>
        <ArrowBack className="backIcon" onClick={backHome} />
      </IconButton>
    </div>
  );
}

export default Header;
