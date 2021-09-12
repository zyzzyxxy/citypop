import { Link, useHistory, Redirect } from "react-router-dom";

const SearchButton = ({ searchFunction, gotResult }) => {
    console.log("gotRersult", gotResult)

return (
    <Link to="/results" style={{textDecoration:'none'}}>
    <button className="search-btn" onClick={searchFunction}>
      Search
    </button>
    </Link>
  );
};

export default SearchButton;
