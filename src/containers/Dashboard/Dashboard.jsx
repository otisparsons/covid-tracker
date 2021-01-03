import React from "react";
import styles from "./Dashboard.module.scss";
import InfoCard from "../../components/InfoCard";
import CountryList from "../../components/CountryList";

const Dashboard = (props) => {
  const { data, countrydata } = props;

  return (
    <article>
      <h1 className={styles.header}></h1>
      <InfoCard data={data} />
      <CountryList countrydata={countrydata} />
    </article>
  );
};

export default Dashboard;
