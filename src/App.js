import { BrowserRouter as Router, Route, Link, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import FirstPageButtons from "./components/FirstPageButtons";
import SearchBar from "./components/SearchBar";
import SearchResultView from "./components/SearchResultView";
import ThreeDotsWave from "./components/ThreeDotVawe";
import sleep from "./Sleep";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [cityOrCountry, setCityOrCountry] = useState("");
  const [searchResult, setResult] = useState([{totalResultsCount:0}]);
  const [loading, setLoading] = useState(false);
  const [gotResult, setGotresult] = useState(false);

  const maxRowsForCountry = 5;

  const search = async () => {
    //For animation
    setLoading(true);

    //Just for testing animation when loading
    await sleep(1000);
    console.log("Searching for: ", cityOrCountry, searchWord);
    cityOrCountry === "country"
      ? await getSearchResultsCountry()
      : await getSearchResultsCity();
    console.log("tot res count: ", searchResult.totalResultsCount);
    setGotresult(0<searchResult.totalResultsCount);

    //For stopping animation
    setLoading(false);
  
  }
  const onCityClick = (updatedResult) => {
    console.log(updatedResult)
    // s newResult = searchResult.filter((item) => item.geonames.name !== updatedResult.name)
    setResult({geonames:[updatedResult],totalResultsCount:1 });
    setCityOrCountry("city");
  }


  const getSearchResultsCountry = async () => {
    const res = await fetch(
      `http://api.geonames.org/searchJSON?q=${searchWord}&maxRows=${maxRowsForCountry}&orderby=population&cities=cities15000&username=weknowit`
    );
    const data = await res.json();
    setResult(data);
    console.log(data);
  };
  const getSearchResultsCity = async () => {
    const res = await fetch(
      `http://api.geonames.org/searchJSON?q=${searchWord}&maxRows=1&username=weknowit`
    );
    const data = await res.json();
    setResult(data);
    console.log(data);
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
            searchFor={setCityOrCountry}
            gotResult = {gotResult}
          />
        </Route>
        <Route path="/country">
          <SearchBar
            title="SEARCH BY COUNTRY"
            placeholder="Write your country"
            searchFunction={search}
            updateSearchWord={setSearchWord}
            searchFor={setCityOrCountry}
            routeToResult={typeof searchResult !== 'undefined' && searchResult.totalResultsCount > 0}
            gotResult = {gotResult}
          />
        </Route>        
        <Route path="/results">
        <SearchResultView
            result = {searchResult}
            cityOrCountry = {cityOrCountry}
            loading = {loading}
            onCityClick = {onCityClick}

          />
        </Route>

          {/* This should probably be done withouth hiding, but contitionally loading */}
          <ThreeDotsWave visible={loading} />
          
      </div>
    </Router>
  );
}

export default App;
