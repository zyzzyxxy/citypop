import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import FirstPageButtons from "./components/FirstPageButtons";
import SearchByCity from "./components/SearchByCity";
import SearchByCountry from "./components/SearchByCountry";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [searchFor, setSearchFor] = useState("");
  const [searchResult, setResult] = useState([]);

  const search = async () => {
    console.log("Searching for: ", searchFor, searchWord);
    searchFor === 'country' ? await getSearchResultsCountry() : await getSearchResultsCity();
    console.log("tot res count: ", searchResult.totalResultsCount);
  };

  const fetchData = async () => {
    const res = await fetch(
      `http://api.geonames.org/searchJSON?q=${searchWord}&maxRows=3&username=weknowit`
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getSearchResults = async () => {
      const data = await fetchData();
      setResult(data);
    };
  }, []);

  const getSearchResultsCountry = async () =>{
    const res = await fetch(`http://api.geonames.org/searchJSON?q=${searchWord}&maxRows=3&orderby=population&cities=cities15000&username=weknowit`);
    const data = await res.json();
    setResult(data);
    console.log(data);
  }  
  const getSearchResultsCity = async () =>{
    const res = await fetch(`http://api.geonames.org/searchJSON?q=${searchWord}&maxRows=1&username=weknowit`);
    const data = await res.json();
    setResult(data);
    console.log(data);
  }

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
