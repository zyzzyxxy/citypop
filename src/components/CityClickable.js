const CityClickable = ({result, name, population, onClick}) => {
    const click = ()=>{console.log(onClick)}

    return (
        <div className="cityClickable" onClick={()=>onClick(result)}>
            <h3> {name}  {population}</h3>
        </div>
    )
}

export default CityClickable
