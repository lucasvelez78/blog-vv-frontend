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
          <h1>Bienvenidos</h1>
          <h3>El Blog de Vivi</h3>
          <p>
            Aquí encontrarás, además de mis publicaciones, los servicios que
            ofrezco, todos relacionados con la sanación de la mente y el
            espíritu. Regístrate y recibe nuestro boletín informativo para que
            estés informado de nuestros eventos y ofertas especiales.
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
