import "./AppDownload.css";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download
        <span className="app-name"> Foody </span>App
      </p>
      <div className="app-download-platform">
        <div className="app-store">
          <FaGooglePlay className="app-icon" />
          <div>
            <p className="app-p">Get it on</p>
            <p className="app-text">Google Play</p>
          </div>
        </div>
        <div className="app-store">
          <FaApple className="app-icon" />
          <div>
            <p className="app-p">Download on the</p>
            <p className="app-text">App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
