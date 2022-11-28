import React from "react";
import playStore from "../images/Appstore.png";
import appStore from "../images/playstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        
        <a href="https://play.google.com/store/apps/developer?id=Malik+Saad" target="_blank"><img src={playStore} alt="playstore" /></a>
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>WorkPay.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Admin</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/js4coders" target="_blank"> Instagram</a>
        <a href="https://www.youtube.com/watch?v=eHqaFbE7G_w" target="_blank">Youtube</a>
        <a href="http://instagram.com/maliksaad.tanveer.7" target="_blank">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
