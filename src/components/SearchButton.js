import {Link} from "react-router-dom"

const SearchButton = ({searchFunction}) => {

    return (
        <button className='search-btn' onClick={searchFunction}>
            Search
        </button>
    )
}

export default SearchButton
