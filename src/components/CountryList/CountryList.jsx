import React, { useState } from "react";
import styles from "./CountryList.module.scss";
import { Component } from "react";

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
      return country.country
        .toLowerCase()
        .includes(this.search.value.toLowerCase());
    });

    this.setState({ filteredItems: filter });
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
    const { filteredItems, isLoaded, items } = this.state;

    const content =
      filteredItems.length > 0
        ? this.createJsx(filteredItems)
        : this.createJsx(items);

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={styles.countryListcontainer}>
          <form className={styles.search}>
            <input
              placeholder="Search for country..."
              ref={(input) => (this.search = input)}
              onChange={this.handleInputChange}
            />
          </form>
          <div className={styles.countrycontainer}>
            <div className={styles.countrylist}>
              <ul>{content}</ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CountryList;
