import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import styles from "./SearchBar.module.scss";
import axios from "axios";

function SearchBar() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(()=> {
    setLoading(true);
    axios
    .get("https://disease.sh/v3/covid-19/countries")
    .then((res) => {
      setCountries(res.data);
      setLoading(false);
    })
  
    .catch((err)=> {
      console.log(err);
    });
}, []);

  // useEffect(() => {
  //   setFilteredCountries(
  //     countries.filter((country)=>
  //     country.name.toLowerCase().includes(search.toLowerCase())
  //   )
  // );
  //   }, [search, countries]);

    if(loading) {
      return <p>Loading countries...</p>;
    }
  
    return (
      <div className="App">
        <h1> Countries List</h1>

        <input 
          type="text"
          placeholder="Search Countries"
          onChange={(e) => setSearch(e.target.value)}/>

          {filteredCountries.map((country, idx) => (
            <CountryDetail key={idx} {...country}/>
          ))}
      </div>
    );
    }

    const CountryDetail = (props) => {
      const {name} = props;

      return (
        <>
        <p>{name}</p>
        </>
      );
    };

    const rootElement = document.getElementById("root");
    ReactDom.render(<SearchBar />, rootElement);

export default SearchBar;
