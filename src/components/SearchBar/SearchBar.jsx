import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

// const SearchBar = () => {
//   return (
//     <div className={styles.searchbar}>
//       <p>SearchBar works</p>
//     </div>
//   );
// };

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { placeholder, updateSearchText } = props;
  const input = isOpen ? (
    <input
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      onInput={(e) => updateSearchText(e.target.value)}
    />
  ) : null;

  return (
    <div className={styles.search}>
      {input}
      <span className={styles.fa} onClick={() => setIsOpen(!isOpen)}>
        <p>WORKS</p>
      </span>
    </div>
  );
};

export default SearchBar;
