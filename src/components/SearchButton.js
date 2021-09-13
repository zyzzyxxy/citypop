import { Link } from "react-router-dom";

const SearchButton = ({ searchFunction }) => {
  return (
    <Link to="/results" style={{ textDecoration: "none" }}>
      <button id="searchButton" className="search-btn" onClick={searchFunction}>
        Search
      </button>
    </Link>
  );
};

export default SearchButton;
