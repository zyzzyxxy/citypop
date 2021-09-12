const City = ({population, name}) => {
    return (
        <div>
            <h2 className="header-2">{name.toUpperCase()}</h2>
            <div className="city">
            <h3 className="header-3">POPULATION</h3>
            <p className="population">{population.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default City
