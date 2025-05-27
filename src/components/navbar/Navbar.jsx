import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <div className={"navbar"}>
      <div className={"container"}>
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className={"right"}>
          <SearchIcon className={"icon"} />
          <span>KID</span>
          <NotificationsIcon className={"icon"} />
          <img
            className={"user-image"}
            src="https://images.pexels.com/photos/32220056/pexels-photo-32220056/free-photo-of-elegant-portrait-of-a-woman-with-gold-necklace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="User Image"
          />
          <div className="profile">
            <ArrowDropDownIcon className={"icon"} />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
