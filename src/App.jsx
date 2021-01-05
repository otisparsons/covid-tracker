import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";

import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";

import { sortData } from "./Util";

import numeral from "numeral";

const App = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

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

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  let dashboard = <Dashboard setSearchText={setSearchText} />;
  if (data) {
    dashboard = (
      <Dashboard
        data={data}
        casesType={casesType}
        countries={mapCountries}
        center={mapCenter}
        zoom={mapZoom}
      />
    );
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
