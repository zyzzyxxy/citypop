import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import FirstPageButtons from "./components/FirstPageButtons";
import SearchByCity from "./components/SearchByCity";
import SearchByCountry from "./components/SearchByCountry";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchFor, setSearchFor] = useState("");

  const search = () => {
    console.log("Searching for: ", searchFor, searchWord);
  };
  return (
    <Router>
      <div className="container">
        <Header title="CityPop" />
        <Route path="/" exact component={FirstPageButtons} />
        {/* <Route path="/city" component={SearchByCity} /> */}
        <Route path="/city">
          <SearchBar
            title="SEARCH BY CITY"
            placeholder="Write your city"
            searchFunction={search}
            updateSearchWord={setSearchWord}
            searchFor={setSearchFor}
          />
        </Route>
        <Route path="/country">
          <SearchBar
            title="SEARCH BY COUNTRY"
            placeholder="Write your country"
            searchFunction={search}
            updateSearchWord={setSearchWord}
            searchFor={setSearchFor}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
