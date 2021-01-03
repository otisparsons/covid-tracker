import React from "react";
import styles from "./Dashboard.module.scss";
import InfoCard from "../../components/InfoCard";
import CountryList from "../../components/CountryList";
import Map from "../../components/Map";

const Dashboard = (props) => {
  const { data, countrydata } = props;

  return (
    <article>
      <div className={styles.infobox}>
        <InfoCard data={data} />
      </div>
      <section className={styles.container}>
        <div className={styles.leftcolumn}>
          <Map />
        </div>
        <div className={styles.rightcolumn}>
          <CountryList countrydata={countrydata} />
        </div>
      </section>
    </article>
  );
};

export default Dashboard;
