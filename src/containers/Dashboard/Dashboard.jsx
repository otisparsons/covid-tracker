import React from "react";
import styles from "./Dashboard.module.scss";
import InfoCard from "../../components/InfoCard";

const Dashboard = (props) => {
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
    <>
      <h1>Covid 19 Dashboard</h1>
      <article className={styles.infoCards}>
        <section className={styles.card}>
          <h2>Total Cases: {cases}</h2>
          <h3>Today Cases: {todayCases}</h3>
        </section>

        <section className={styles.card}>
          <h2> Total Recovered: {recovered}</h2>
          <h3> Today Recovered: {todayRecovered} </h3>
        </section>

        <section className={styles.card}>
          <h2>Total Deaths: {deaths}</h2>
          <h3>Today Deaths: {todayDeaths}</h3>
        </section>
      </article>
    </>
  );
};

export default Dashboard;
