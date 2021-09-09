import { Link } from "react-router-dom";

const BigButton = ({ title, onClick, routeTo }) => {
  return (
    <Link to={routeTo}>
      <button className="button">{title}</button>
    </Link>
  );
};

export default BigButton;
