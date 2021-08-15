import "./profile.scss";
import Header from "./Header"
import Charts from "./Charts";
import Repo from "./Repo";

function Profile() {
  
  return (
    <div className="profile">
      <Header />
      <Charts />
      <Repo />
    </div>
  );
}

export default Profile;
