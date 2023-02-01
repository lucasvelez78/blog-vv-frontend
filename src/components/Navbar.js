import { useContext } from "react";
import { logContext } from "../context/logContext";
import { Link } from "react-router-dom";

function Navbar() {
  // Burger menu animation

  function navSlide() {
    const nav = document.querySelector(".navLinks");
    const navigationLinks = document.querySelectorAll(".navLinks a");
    nav.classList.toggle("navActive");
    navigationLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
  }

  const { log, logOut } = useContext(logContext);

  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>Angels</h1>
          </Link>
        </div>
        <ul className="navLinks">
          <li>
            <Link to="/products">Servicios</Link>
          </li>
          <li>
            <Link to="/posts">Publicaciones</Link>
          </li>
          <li>
            <Link to="/contact">Contáctanos</Link>
          </li>
          {!log ? (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          ) : (
            <li>
              <button className="btn-logout" onClick={logOut}>
                Cerrar Sesión
              </button>
            </li>
          )}
        </ul>
        <div className="burger" onClick={navSlide}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
