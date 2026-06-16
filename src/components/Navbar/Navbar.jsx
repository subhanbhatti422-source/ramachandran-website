import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div id="Navbar" className="navbar">
        <a href="#Creative">
          <h3>WHY RAMACHANDRAN</h3>
        </a>

        {/* Hamburger Button */}
        {!menuOpen && (
          <div
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
        )}

        {/* Menu */}
        <div id="full" className={menuOpen ? "active" : ""}>
          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {location.pathname !== "/" && (
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          )}

          <Link to="/work" onClick={() => setMenuOpen(false)}>
            WORK
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>

          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            RESUME
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT
          </Link>
        </div>

        <a
          href="https://www.linkedin.com/in/whyramachandran/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          LINKEDIN
        </a>
      </div>
    </nav>
  );
}

export default Navbar;