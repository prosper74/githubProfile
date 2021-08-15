import "./repo.scss";
import {
  UilLayersAlt,
  UilAngleRight,
  UilStar,
  UilCodeBranch,
} from "@iconscout/react-unicons";

function Repo() {
  const user = JSON.parse(localStorage.getItem("user"));
  const repo = user.repositories.nodes;

  return (
    <div className="repo section">
      <h2 className="repoTitle">Latest Repositories</h2>
      <div className="repoContainer grid">
        {/* this is the repository card */}

        {repo.map((d) => (
          <a href={d.url} target="_blank" className="repoContent">
            <div>
              {/* Repository title and description */}
              <UilLayersAlt size="30" className="repoIcon" />
              <h3 className="repoTitle">{d.name}</h3>
              <p className="repoDescription">{d.description}</p>
            </div>

            {/* Languaga used, star rating, forked and repo size */}
            <div className="repoMeta">
              <div className="leftMeta">
                {/* Language  */}
                <div className="language">
                  <div
                    style={{
                      backgroundColor: d.primaryLanguage === null ? "" : d.primaryLanguage.color,
                    }}
                    className="circle"
                  ></div>

                  {d.primaryLanguage === null ? "" : d.primaryLanguage.name}
                </div>

                {/* star rating */}
                <div className="starRating">
                  <UilStar size="15" />
                  {d.stargazerCount}
                </div>

                {/* forked */}
                <div className="forked">
                  <UilCodeBranch size="15" />
                  {d.forkCount}
                </div>
              </div>

              {/* repo size */}
              <div className="repoSize">{d.diskUsage} KB</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Repo;
