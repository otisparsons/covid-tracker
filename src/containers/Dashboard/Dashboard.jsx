import React from "react";
import styles from "./Dashboard.module.scss";
import InfoCard from "../../components/InfoCard";

const Dashboard = (props) => {
  const { data } = props;
  return (
    <article>
      <h1 className={styles.header}>Covid 19 Dashboard</h1>
      <InfoCard data={data} />
    </article>
  );
};

export default Dashboard;
