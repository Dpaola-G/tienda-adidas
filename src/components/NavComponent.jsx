import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavComponent = () => {
  const navigate = useNavigate()


  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex ">
        <Link to="https://www.adidas.co/" className="navbar-brand">
          <header className="app-header">
            <img src="https://s3.amazonaws.com/stripgenerator/strip/10/91/26/00/00/full.png" width="80" alt="Logo" className="app-logo" />
          </header>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-auto ">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/HomePage" className="nav-link active" aria-current="page">
                  Home Page
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mujer
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/SacoM" className="dropdown-item" href="#">Sacos</Link></li>
                  <li><Link to="/MochilaM" className="dropdown-item" href="#">Mochila</Link></li>
                  <li><Link to="/ZapatosM" className="dropdown-item" href="#">Zapatos</Link></li>
                </ul>
              </li>


              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hombre
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/ZapatosH" className="dropdown-item" href="#">Zapatos</Link></li>
                  <li><Link to="/MochilaH" className="dropdown-item" href="#">Mochilas</Link></li>
                  <li><Link to="/SacoH" className="dropdown-item" href="#">Sacos</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/ListProductsPage" className="nav-link " aria-disabled="true">
                  Más
                </Link>

              </li>

              <li className="nav-item">
                <Link to="/" className="nav-link " aria-disabled="true">
                  Iniciar
                </Link>
              </li>


              <li className="nav-item">
                <Link to="https://www.google.com/" className="nav-link " aria-disabled="true">
                  salir
                </Link>
              </li>

            </ul>


          </div>
        </div>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>













  );
};




export default NavComponent;







