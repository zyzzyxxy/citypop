import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <header className="header">{props.title}</header>
      </Link>
    </>
  );
};

export default Header;
