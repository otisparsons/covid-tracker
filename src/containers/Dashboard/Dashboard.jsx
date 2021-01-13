import React from "react";
import styles from "./Dashboard.module.scss";
import InfoCard from "../../components/InfoCard";
import CountryList from "../../components/CountryList";
import CasesGraph from "../../components/CasesGraph";
import Map from "../../components/Map";

const Dashboard = (props) => {
  const { data, casesType } = props;
  // console.log(casesType);

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
          <div className={styles.topRow}>
            <CountryList />
          </div>
          <div className={styles.bottomRow}>
            <CasesGraph casesType={casesType} />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Dashboard;
