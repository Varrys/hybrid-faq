import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">        
          <img src="/logo.png" alt="Logo" />        
      </div>
      <div className="navbar-links">
        {/*<a href="#contato">Contatos</a>*/}
      </div>
    </nav>
  );
}