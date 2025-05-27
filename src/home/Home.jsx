import "./home.scss";
import Navbar from "../components/navbar/Navbar.jsx";

const Home = () => {
  return (
    <div className={"home"}>
      <Navbar />
      <img
        className={"test-slika"}
        src="https://images.pexels.com/photos/32220056/pexels-photo-32220056/free-photo-of-elegant-portrait-of-a-woman-with-gold-necklace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="User Image"
      />
    </div>
  );
};

export default Home;
