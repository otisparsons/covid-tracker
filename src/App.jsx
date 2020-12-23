import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";
import InfoCard from "./components/InfoCard";
import CountryList from "./components/CountryList";

const App = () => {
  const [data, setData] = useState([]);
  const [countrydata, setCountry] = useState([]);

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

  let dashboard = <Dashboard />;
  if (data) {
    dashboard = <Dashboard data={data} />;
  }

  const getCountry = () => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      });
  };
  useEffect(() => {
    getCountry();
  }, []);

  let countrylist = <CountryList />;
  if (countrydata) {
    countrylist = <CountryList countrydata={countrydata} />;
  }

  return (
    <div className="App">
      <NavBar />
      {dashboard}
      {countrylist}
    </div>
  );
};

export default App;
