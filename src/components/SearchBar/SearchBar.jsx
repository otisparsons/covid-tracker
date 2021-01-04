import React, { Component } from "react";
import axios from "axios";
import CountryPage from "../CountryPage";
// import ReactDom from "react-dom";
// import styles from "./SearchBar.module.scss";
// import axios from "axios";

const { API_KEY } = process.env;
const API_URL = "https://disease.sh/v3/covid-19/countries";
console.log(API_KEY);
class SearchBar extends Component {
  state = {
    query: "",
    results: [],
  };

  getInfo = () => {
    axios
      .get(
        `${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=1000`
      )
      .then(({ data }) => {
        this.setState({
          results: data.data,
        });
      });
  };
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <CountryPage results={this.state.results} />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

export default SearchBar;

// function SearchBar() {
//   const [countries, setCountries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filteredCountries, setFilteredCountries] = useState([]);

//   useEffect(()=> {
//     setLoading(true);
//     axios
//     .get("https://disease.sh/v3/covid-19/countries")
//     .then((res) => {
//       setCountries(res.data);
//       setLoading(false);
//     })

//     .catch((err)=> {
//       console.log(err);
//     });
// }, []);

// useEffect(() => {
//   setFilteredCountries(
//     countries.filter((country)=>
//     country.name.toLowerCase().includes(search.toLowerCase())
//   )
// );
//   }, [search, countries]);

// if(loading) {
//   return <p>Loading countries...</p>;
// }

// return (
//   <div className="App">
//     <h1> Countries List</h1>

//     <input
//       type="text"
//       placeholder="Search Countries"
//       onChange={(e) => setSearch(e.target.value)}/>

//       {filteredCountries.map((country, idx) => (
//         <CountryDetail key={idx} {...country}/>
//       ))}
//   </div>
// );
// }

// const CountryDetail = (props) => {
//   const {name} = props;

//   return (
//     <>
//     <p>{name}</p>
//     </>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDom.render(<SearchBar />, rootElement);
