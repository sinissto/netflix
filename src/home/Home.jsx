import "./home.scss";
import Navbar from "../components/navbar/Navbar.jsx";
import Featured from "../components/featured/Featured.jsx";
import List from "../components/list/List.jsx";

const Home = () => {
  return (
    <div className={"home"}>
      <Navbar />
      <Featured type={"movies"} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
