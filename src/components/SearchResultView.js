import City from "./City";
import Country from "./Country";

const SearchResultView = ({ result, cityOrCountry }) => {
  return (
    <>
    {result.totalResultsCount>0 ? 
      cityOrCountry === "city"
        ? result.geonames.map((res) => <City name={res.name} population={res.population} />)
        : result.geonames.map((res) => (
            <Country 
            name={res.name} 
            countryName={res.countryName} 
            population={res.population} />
          )) : 
          <h2>No results from search</h2>
        }
    </>
  );
};

export default SearchResultView;
