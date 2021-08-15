import "./charts.scss";
import Activities from "./recharts/Activities";
import LanguageChart from "./recharts/LanguageChart";
import MostStarred from "./recharts/MostStarred";

function Charts() {
  return (
    <div className="charts section">
      <div className="cards grid">
        <div className="card">
          <h2>Top Languages</h2>
          <div className="languages">
            <div className="language">
              Javascript <div className="rectangle first"></div>
            </div>
            <div className="language">
              HTML <div className="rectangle second"></div>
            </div>
            <div className="language">
              CSS <div className="rectangle third"></div>
            </div>
          </div>

          <div className="pieChart">
            <LanguageChart />
          </div>
        </div>

        <div className="card">
          <h2>Most Starred</h2>

          <div className="pieChart">
            <MostStarred />
          </div>
        </div>

        <div className="card">
          <h2>Activities</h2>

          <div className="pieChart">
            <Activities />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
