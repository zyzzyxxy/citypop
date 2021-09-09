import { Link } from "react-router-dom"

const HomeButton = () => {
    return (
        <Link to="/">
            <button className='home-btn'>
                Home
            </button>
        </Link>
    )
}

export default HomeButton
