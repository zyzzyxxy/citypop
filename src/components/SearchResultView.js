import City from "./City";
import CityClickable from "./CityClickable";

const SearchResultView = ({ result, cityOrCountry, loading, onCityClick }) => {

  return (
    !loading && (
      <>
        {/* Setting header for country if searching for country*/}
        {result.totalResultsCount > 0 && cityOrCountry === "country" && (
          <h2 className="header-2">
            {result.geonames[0].countryName.toUpperCase()}
          </h2>
        )}

        {/* Checking what results to show*/}
        {result.totalResultsCount > 0 ? (
          cityOrCountry === "city" ? (
            result.geonames.map((res) => (
              <City name={res.name} population={res.population} />
            ))
          ) : (
            result.geonames.map((res) => (
              <CityClickable
                result={res}
                name={res.name}
                population={res.population}
                onClick={onCityClick}
              />
            ))
          )
        ) : result === undefined ? (
          <></>
        ) : (
          <h2>No results from search</h2>
        )}
      </>
    )
  );
};

export default SearchResultView;
