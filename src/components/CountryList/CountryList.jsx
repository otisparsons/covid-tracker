import React from "react";
import styles from "./CountryList.module.scss";

const CountryList = (props) => {
  // const { countrydata } = props;
  // const { country, recovered } = props.countrydata;

  return (
    <section className={styles.countrylist}>
      <h2>Country:</h2>
      <h2>Cases:</h2>
      <h2>Recovered:</h2>
      <h2>Deaths:</h2>
    </section>
  );
};
export default CountryList;
