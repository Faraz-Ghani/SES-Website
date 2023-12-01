import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }; 

  return (
    <header>
      <img src='/images/logo.png' alt="logo" className="nav-logo"></img>

      <nav ref={navRef}>
        <a href="/#home">Home</a>
        <a href="/#what-ses">What Is SES?</a>
        <a href="/#team">Teams</a>
        <a href="/#star">Stars</a>
        <a href="/#events">Events</a>
        <a href="/#partners">Partners</a>
        <a href="/#appreciation">Appreciations</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-bar-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}



export default Navbar;
