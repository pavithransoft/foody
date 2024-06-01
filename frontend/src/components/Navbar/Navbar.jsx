import { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import PropTypes from "prop-types";
import { IoRestaurantOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaShopify } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart, CiLogout } from "react-icons/ci";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <IoRestaurantOutline className="logo-icon" />
        <h1>Foody</h1>
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : " "}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : " "}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : " "}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : " "}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <FiSearch className="nav-menu-icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <FaShopify className="nav-menu-icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-Profile">
            <FaRegUser
              className="nav-menu-icon"
              onMouseEnter={toggleDropdown}
            />
            {isOpen && (
              <ul
                className="nav-profile-dropdown"
                onMouseLeave={toggleDropdown}
              >
                <li onClick={() => navigate("/myorders")}>
                  <CiShoppingCart className="order-list" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <CiLogout className=" logout" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
