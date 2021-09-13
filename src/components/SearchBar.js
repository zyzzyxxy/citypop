import SearchButton from "./SearchButton";
import { useLocation } from "react-router-dom";

const SearchBar = ({
  title,
  placeholder,
  searchFunction,
  updateSearchWord,
  searchFor
}) => {
  const location = useLocation();
  const updateSearchFor = () => {
    searchFor(location.pathname.replace("/", ""));
  };

  const res = updateSearchFor();

  const checkForEnterKey = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
}

  return (
    <>
      <h2 className="header-2">{title}</h2>
      <input
        id="searchInput"
        placeholder={placeholder}
        className="inputText"
        onChange={(e) => updateSearchWord(e.target.value)}
        onKeyDown={(e)=>checkForEnterKey(e)}
        
      />
      <SearchButton searchFunction={searchFunction} />
    </>
  );
};

export default SearchBar;
