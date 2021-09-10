import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import FirstPageButtons from "./components/FirstPageButtons";
import SearchBar from "./components/SearchBar";
import SearchResultView from "./components/SearchResultView";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [cityOrCountry, setCityOrCountry] = useState("");
  const [searchResult, setResult] = useState([]);

  const search = async () => {
    console.log("Searching for: ", cityOrCountry, searchWord);
    cityOrCountry === "country"
      ? await getSearchResultsCountry()
      : await getSearchResultsCity();
    console.log("tot res count: ", searchResult.totalResultsCount);
    updateSearchResultView();
  };

  function updateSearchResultView() {
    console.log("updating view");
  }

  const getSearchResultsCountry = async () => {
    const res = await fetch(
      `http://api.geonames.org/searchJSON?q=${searchWord}&maxRows=3&orderby=population&cities=cities15000&username=weknowit`
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

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  // };

  //   getTasks();
  // }, []);

  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:5000/tasks");
  //   const data = await res.json();

  //   return data;
  // };

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
          />
        </Route>
        <Route path="/country">
          <SearchBar
            title="SEARCH BY COUNTRY"
            placeholder="Write your country"
            searchFunction={search}
            updateSearchWord={setSearchWord}
            searchFor={setCityOrCountry}
          />
        </Route>        
        <Route path="/results">

        </Route>
        <SearchResultView
            result = {searchResult}
            cityOrCountry = {cityOrCountry}

          />
      </div>
    </Router>
  );
}

export default App;
