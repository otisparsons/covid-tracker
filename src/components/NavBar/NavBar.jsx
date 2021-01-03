import React from "react";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <header className={styles.header}>
        C<FontAwesomeIcon icon={faVirus} />
        VID 19 <span>TRACKER</span>
      </header>
      <span className={styles.github}>
        <p>
          Built by Malwina
          <span>
            <a href="https://github.com/wowermalwina">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          and Otis
          <span>
            <a href="https://github.com/otisparsons">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
        </p>
      </span>
    </nav>
  );
};

export default NavBar;
