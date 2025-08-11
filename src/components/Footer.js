import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p class="OrgFooter">Organizado por:</p>
      <div className="footer-logos">
        <img src="/cross1.png" alt="Logo 1" />
        <img src="/xlife.png" alt="Logo 2" />
      </div>
    </footer>
  );
}
