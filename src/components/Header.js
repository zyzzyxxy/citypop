import { useLocation } from "react-router"
import HomeButton from "./HomeButton";

const Header = (props) => {
    const location = useLocation();

    return (
        <>
        <header className='header'>
            {props.title} 
            {location.pathname !== "/" && (<HomeButton />)}
        </header>
        </>
    )
}

export default Header
