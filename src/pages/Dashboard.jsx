//rrd import
import { useLoaderData } from "react-router-dom";

//helper functions
import { fetchData } from "../helpers";

//loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();
  return <div>Dashboard Name: {userName}</div>;
};

export default Dashboard;
