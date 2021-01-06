import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";

import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";

const App = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [casesType, setCasesType] = useState("cases");
  const [countries, setCountries] = useState([]);

  const getData = () => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((x) => {
        console.log(x);
        setData(x);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  let dashboard = <Dashboard setSearchText={setSearchText} />;
  if (data) {
    dashboard = <Dashboard data={data} casesType={casesType} />;
  }

  return (
    <div className="App">
      <section className={styles.App}>
        <NavBar />
        {dashboard}
      </section>
    </div>
  );
};

export default App;
