import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-line"></div>
      <div className="footer-top-container">
        <div className="brand">
          <h4>VVM.</h4>
        </div>
        <div className="socials">
          <div className="social instagram">
            <a href="https://www.instagram.com/">
              <BsInstagram size={"1.3em"} />
            </a>
          </div>
          <div className="social facebook">
            <a href="https://www.facebook.com/">
              <BsFacebook size={"1.3em"} />
            </a>
          </div>
          <div className="social twitter">
            <a href="https://www.twitter.com/">
              <BsTwitter size={"1.3em"} />
            </a>
          </div>
        </div>
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contáctanos</Link>
          </li>
        </ul>
      </div>
      <div className="footer-line"></div>
      <div className="developer">
        <p>© Designed and developed by lucasVelez</p>
      </div>
    </div>
  );
}

export default Footer;
