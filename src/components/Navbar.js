function Navbar() {
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

  return (
    <nav>
      <div className="logo">
        <a href="/">
          <h1>Angels</h1>
        </a>
      </div>
      <ul className="navLinks">
        <li>
          <a href="/">Nosotros</a>
        </li>
        <li>
          <a href="/products">Servicios</a>
        </li>
        <li>
          <a href="/posts">Publicaciones</a>
        </li>
        <li>
          <a href="/contact">Contáctanos</a>
        </li>
      </ul>
      <div className="burger" onClick={navSlide}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
