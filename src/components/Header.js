import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import HomeButton from "./HomeButton";

const Header = (props) => {
  const location = useLocation();

  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <header className="header">
          {props.title}
          {/* {location.pathname !== "/" && (<HomeButton />)} */}
        </header>
      </Link>
    </>
  );
};

export default Header;
