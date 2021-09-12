import City from "./City";
import Country from "./Country";

const SearchResultView = ({ result, cityOrCountry, loading }) => {
  return (
      !loading &&
    <>
      {result.totalResultsCount > 0 && cityOrCountry === "country" && (
        <h2 className="header-2">
          {result.geonames[0].countryName.toUpperCase()}
        </h2>
      )}

      {result.totalResultsCount > 0 ? (
        cityOrCountry === "city" ? (
          result.geonames.map((res) => (
            <City name={res.name} population={res.population} />
          ))
        ) : (
          result.geonames.map((res) => (
            <Country name={res.name} population={res.population} />
          ))
        )
      ) : (result === undefined?
        <></>:<h2>No results from search</h2>
      
      )}

    </>
  );
};

export default SearchResultView;
