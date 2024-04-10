import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="containerNav">
      <Link to="/">
        <div>Platon 🍽</div>
      </Link>
      <ul className="containerNav--ul">
        <Link className="containerNav--ul--li" to="category/carnes">
          Carnes
        </Link>
        <Link className="containerNav--ul--li" to="category/guarniciones">
          Guarniciones
        </Link>
        <Link className="containerNav--ul--li" to="category/refrescos">
          refrescos
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
