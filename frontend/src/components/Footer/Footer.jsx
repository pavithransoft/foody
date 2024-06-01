import "./Footer.css";
import { IoRestaurantOutline } from "react-icons/io5";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo">
            <IoRestaurantOutline className="logo-icon" />
            <h1>Foody</h1>
          </div>
          <p>
            Indulge in culinary delight at Foody, where every bite tells a
            story. From artisanal cheeses to freshly baked bread, our curated
            selection tantalizes taste buds. Explore global flavors or savor
            local specialties, all sourced with care for quality and freshness.
            Whether you're a gourmet enthusiast or a casual foodie, our shop is
            a haven for gastronomic adventures. Come, experience a symphony of
            flavors at Foody.
          </p>
          <div className="footer-social">
            <CiFacebook className="social-icons" />
            <CiTwitter className="social-icons" />
            <CiLinkedin className="social-icons" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@foody.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; foody.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
