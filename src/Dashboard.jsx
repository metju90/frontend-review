import "./Dashboard.css";
import GithubUsers from "./githubUsers";

const Dashboard = () => {
  return (
    <div class="Dashboard">
      Github users:
      <GithubUsers maxUsers={10} />
    </div>
  );
};

export default Dashboard;
