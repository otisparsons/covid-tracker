import React from "react";
import styles from "./CountryPage.module.scss";

const CountryPage = (props) => {
  const options = props.results.map((result) => (
    <p key={result.id}>{result.name}</p>
  ));
  return <ul>{options}</ul>;
};

export default CountryPage;
