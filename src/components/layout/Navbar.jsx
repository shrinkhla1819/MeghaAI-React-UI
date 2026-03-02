import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../styles/navbar.css";
import logo from "../../assets/logo1.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.toLowerCase().trim();

    if (query.includes("home")) {
      navigate("/");
    } 
    else if (query.includes("solution")) {
      navigate("/solutions");
    } 
    else if (query.includes("product")) {
      navigate("/products");
    } 
    else if (query.includes("resource")) {
      navigate("/resources");
    } 
    else if (query.includes("about")) {
      navigate("/about");
    } 
    else if (query.includes("contact")) {
      navigate("/contact");
    } 
    else {
      alert("Page not found!");
    }

    setSearch("");
  };

  return (
    <div className="navbar-wrapper">
      <div className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Center Links */}
        <div className="nav-links">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/solutions" className="nav-btn">Solutions</Link>
          <Link to="/products" className="nav-btn">Products</Link>
          <Link to="/resources" className="nav-btn">Resources</Link>
          <Link to="/about" className="nav-btn">About Us</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
        </div>

        {/* Search */}
        <form className="nav-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

      </div>
    </div>
  );
}

export default Navbar;