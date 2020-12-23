import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";
import InfoCard from "./components/InfoCard";

const App = () => {
  const [data, setData] = useState([]);
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

  return (
    <div className="App">
      <NavBar />
      {dashboard}
    </div>
  );
};

export default App;
