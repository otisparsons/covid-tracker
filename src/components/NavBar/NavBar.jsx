import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <header className={styles.header}>COVID 19 TRACKER</header>
      <span className={styles.github}>GITHUB 1 GITHUB 2</span>
    </nav>
  );
};

export default NavBar;
