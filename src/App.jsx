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
      .then((countrydata) => {
        const listAllCountries = countrydata.map((banana) => ({
          Country: banana.country,
          TotalCases: banana.cases,
          TodayCases: banana.todayCases,
          Recovered: banana.recovered,
          Deaths: banana.deaths,
        }));
        setCountry(listAllCountries);
        console.log(listAllCountries);
      });
  };
  useEffect(() => {
    getCountry();
  }, []);

  // const api_url = "https://disease.sh/v3/covid-19/countries";
  // async function getCountryData() {
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   const { death, cases } = data;
  //   document.getElementById("dia").textContent = death;
  // }
  // getCountryData();

  return (
    <div className="App">
      <NavBar />
      {dashboard}
    </div>
  );
};

export default App;
