import SearchButton from "./SearchButton";
import { useLocation } from "react-router-dom";

const SearchBar = ({
  title,
  placeholder,
  searchFunction,
  updateSearchWord,
  searchFor,
  routeToResult,
  gotResult
}) => {
  const location = useLocation();
  const updateSearchFor = () => {
    searchFor(location.pathname.replace("/", ""));
  };

  const res = updateSearchFor();

  return (
    <>
      <h2 className="header-2">{title}</h2>
      <input
        id="searchInput"
        placeholder={placeholder}
        className="inputText"
        onChange={(e) => updateSearchWord(e.target.value)}
      />
      <SearchButton searchFunction={searchFunction} gotResult = {gotResult}/>
    </>
  );
};

export default SearchBar;
