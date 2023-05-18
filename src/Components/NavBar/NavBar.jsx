import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
      <header className="navbar p-0" style={{ backgroundColor: "#122348" }}>
        <div className="container-fluid row m-0 p-0">
          <img
            className="logo col-4 img-fluid rounded mx-auto d-block"
            src={require("../../Img/logo.png")}
            alt="Logo"
          />
          <div className="text-center text-white col p-0">
            <p className="mt-5 mb-3 mr-3 d-block p-5">
              ArtDeco by Alexandra Goven | Arte abstracto, surrealista y moderno | Expresión, Color y
              Textura | Fine Art
            </p>
            <nav className="nav row">
              <ul className="m-0 col-12 col-sm-10 p-0 mt-5">
                <li>
                  <a className="link-underline link-underline-opacity-0 link-light link-uppercase" href="#">INICIO</a>
                </li>
                <li>
                  <a className="link-underline link-underline-opacity-0 link-light" href="#">GALERIA DE ARTE</a>
                </li>
                <li>
                  <a className="link-underline link-underline-opacity-0 link-light" href="#">ACERCA DE</a>
                </li>
                <li>
                  <a className="link-underline link-underline-opacity-0 link-light" href="#">BLOG</a>
                </li>
                <li>
                  <a className="link-underline link-underline-opacity-0 link-light" href="#">CONTACTO</a>
                </li>
              </ul>
              <div className=" container-fluid mx-auto col-12 col-sm-2 mt-5">
                <CartWidget />
              </div>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default NavBar;
