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
      filteredItems: [],
      isLoaded: false,
    };
  }

  handleInputChange = () => {
    const filter = this.state.items.filter((country) => {
      return country.country.includes(this.search.value);
    });

    this.setState({ filteredItems: filter });

    // console.log(this.state.filteredItems);

    // console.log(filter);
    // this.setState(
    //   {
    //     query: this.search.value,
    //   },
    //   () => {
    //     if (this.state.query && this.state.query.length > 1) {
    //       if (this.state.query.length % 2 === 0) {
    //         this.getInfo();
    //       }
    //     }
    //   }
    // );
  };

  getInfo = (country) => {
    const { data } = country;
    const filteredCountries = data.filter(
      (country) =>
        country.country.toLowerCase() === this.state.query.toLowerCase
    );
  };

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

  createJsx(countryArray) {
    return countryArray.map((item) => (
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
    ));
  }

  render() {
    const { filteredItems, isLoaded, items, coun } = this.state;

    const content =
      filteredItems.length > 0
        ? this.createJsx(filteredItems)
        : this.createJsx(items);

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={styles.countrycontainer}>
          <form>
            <input
              placeholder="Search for..."
              ref={(input) => (this.search = input)}
              onChange={this.handleInputChange}
            />
          </form>
          <div className={styles.countrylist}>
            <ul>{content}</ul>
          </div>
        </div>
      );
    }
  }
}

export default CountryList;

//    {items.map((item) => (
//   <li key={item.id}>
//     <div>
//       <img src={item.countryInfo.flag} alt={item.country} />
//       <p>{item.country}</p> <p>Cases: {item.cases}</p>
//       <p>
//         Deaths:
//         {item.deaths}
//       </p>
//       <p>Recovered: {item.recovered}</p>
//     </div>
//   </li>
// ))}
