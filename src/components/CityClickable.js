const CityClickable = ({ result, name, population, onClick }) => {
  return (
    <div className="cityClickable" onClick={() => onClick(result)}>
      <h3>
        {" "}
        {name} {population}
      </h3>
    </div>
  );
};

export default CityClickable;
