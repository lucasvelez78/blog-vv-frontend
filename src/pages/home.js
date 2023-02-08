import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="homeSection">
      <div className="homeLanding">
        <div className="left">
          <div className="landingDeco"></div>
          <div className="landingImage"></div>
        </div>
        <div className="right">
          <h1>Hello CodeSandbox</h1>
          <h3>Start editing to see some magic happen!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla
            phasellus. Tristique senectus et netus et malesuada fames ac. Sed
            arcu non odio euismod lacinia at quis risus sed.
          </p>
          <Link className="registerBtn" to="/registration">
            Regístrate
          </Link>
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
