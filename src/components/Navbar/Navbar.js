import React from "react";
import * as styles from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import { Link } from "gatsby";
import pageLinks from "../../constants/links";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <a href="/" className={styles.logo}>
          <img src={logo} />
        </a>
        <ul className={styles.links}>
          {pageLinks.map((link) => {
            return <Link to={link.url}>{link.text}</Link>;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
