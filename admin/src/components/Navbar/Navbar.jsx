import "./Navbar.css";
import { assets } from "../../assets/assets";
import { IoRestaurantOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <IoRestaurantOutline className="logo-icon" />
        <h1>Foody Admin</h1>
      </div>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
