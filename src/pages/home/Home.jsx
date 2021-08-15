import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./home.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import { headers, baseUrl, getQuery } from "../../graphql/Queries";

function Home() {
  let history = useHistory();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { register, handleSubmit } = useForm();

  // this is the function that handles the submit button of the form
  const onSubmit = async (data, e) => {
    setError(false);
    setLoading(true);

    // Collect the username passed in the form and send it to the query
    let query = getQuery(data.username);

    // this is where we fetch the data from github GraphQL API using the github username
    let res = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        query,
      }),
    });
    let json = await res.json();
    const user = json.data.user;
    localStorage.setItem("user", JSON.stringify(user))		
    
		if(user === null) {
			setError(true);
			setLoading(false);
		} else {
			JSON.parse(localStorage.getItem("user"));
			setError(false);			
			setLoading(false);
			history.push("/profile");
		}

  };

  return (
    <div className="homeMain">
      <div className="wrapper">
        <div className="intro">
          <GitHubIcon className="gitIcon" />
          <h1 className="title">GitHub Profiler</h1>
          <p className="description">
            A simple app to fetch github user and display the information in a
            nice modern card design{" "}
          </p>
        </div>

        <div className="inputSection">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="githubUsername">Enter username</label>
            <input
              type="text"
              id="githubUsername"
              className="inputField"
              placeholder="Valid Github username"
              name="username"
              {...register("username", { required: true })}
            />
            <button type="submit" disabled={loading}>
              Submit
            </button>
          </form>
        </div>

        {error && <div className="errorMsg">User not found!!!</div>}

        <div className="footerSection">
          designed and developed by Prosper Atu
          <img src="assets/prospernew.png" alt="" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
