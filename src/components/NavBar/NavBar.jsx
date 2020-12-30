import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <header className={styles.header}>COVID 19 TRACKER</header>
      <span className={styles.github}>
        <FontAwesomeIcon icon={faGithub} />
      </span>
    </nav>
  );
};

export default NavBar;
