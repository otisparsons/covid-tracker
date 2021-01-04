import React, { useState } from "react";
import styles from "./CountryList.module.scss";
import { Component } from "react";
import SearchBar from "../SearchBar";

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={styles.countrycontainer}>
          <div className={styles.countrylist}>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.countryInfo.flag} alt={item.country} />
                    <p>{item.country}</p> <p>Cases: {item.cases}</p>
                    <p>
                      Deaths:
                      {item.deaths}
                    </p>
                    <p>Recovered: {item.recovered}</p>
                  </div>
                </li>
              ))}
              ;
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default CountryList;

// const CountryList = (props) => {
//   // const { countrydata } = props;
//   // const { country, recovered } = props.countrydata;

//   return <section className={styles.countrylist}></section>;
// };
// export default CountryList;

//  <h2>Country:</h2>
//   <h2>Cases:</h2>
//   <h2>Recovered:</h2>
//   <h2>Deaths:</h2>
