import React from "react";
import styles from "./InfoCard.module.scss";

const InfoCard = (props) => {
  const { data } = props;
  const {
    cases,
    todayCases,
    deaths,
    recovered,
    todayRecovered,
    todayDeaths,
  } = props.data;

  return (
    <article className={styles.infoCards}>
      <section className={styles.card}>
        <div>
          <h2>Total Cases:</h2> {cases}
        </div>
        <div>
          <h2>Today Cases:</h2> {todayCases}
        </div>
      </section>

      <section className={styles.card}>
        <div>
          <h2> Total Recovered: </h2>
          {recovered}
        </div>
        <div>
          <h2> Today Recovered:</h2> {todayRecovered}
        </div>
      </section>

      <section className={styles.card}>
        <div>
          <h2>Total Deaths: </h2>
          {deaths}
        </div>
        <div>
          <h2>Today Deaths: </h2>
          {todayDeaths}
        </div>
      </section>
    </article>
  );
};

export default InfoCard;
