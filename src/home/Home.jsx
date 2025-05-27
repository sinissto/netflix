import "./home.scss";
import Navbar from "../components/navbar/Navbar.jsx";
import Featured from "../components/featured/Featured.jsx";

const Home = () => {
  return (
    <div className={"home"}>
      <Navbar />
      <Featured />
    </div>
  );
};

export default Home;
