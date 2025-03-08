import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faShoppingCart,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";

const Header = ({ setActive, handleActive, count }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className={styles.navbar}>
      <div className={styles.main_nav_bar}>
        {/* Logo */}
        <Link to={"/"} className={styles.left}>
          <img
            src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"
            alt="brand logo"
          />
        </Link>

        {/* Search Bar */}
        <div className={styles.search_bar}>
          <span className="material-symbols-outlined">search</span>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search for Product"
            className={styles.searchInput}
          />
        </div>

        {/* Cart & Login */}
        <div className={styles.right}>
          <Link to="/cart" className={styles.icon}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Cart</span>
            <span>{count}</span>
          </Link>
          <Link to={"/login"} className={styles.icon}>
            <FontAwesomeIcon icon={faSignInAlt} />
            <span>Login</span>
          </Link>
        </div>
      </div>
      <nav className={styles.sub_bar}>
        <div className={styles.navList}>
          <ul>
            <li
              onClick={() => {
                handleActive("skin");
              }}
            >
              Skin
            </li>
            <li
              onClick={() => {
                handleActive("hair");
              }}
            >
              Hair
            </li>
            <li
              onClick={() => {
                handleActive("baby");
              }}
            >
              Baby
            </li>
            <li>Combo</li>
            <li>New Launches</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
