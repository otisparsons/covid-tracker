import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <div className={styles.search}>
      <input
        key="random1"
        className={styles.input}
        type="search"
        placeholder="search for country"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
