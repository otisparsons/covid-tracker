import React from "react";
import styles from "./CountryList.module.scss";

const CountryList = (props) => {
  const { countrydata } = props;
  // const { country.country } = props.countrydata;

  return (
    <article className={styles.infoCards}>
      <section className={styles.card}>
        {/* <h3>Today Cases: {country.country}</h3> */}
      </section>
    </article>
  );
};
export default CountryList;
