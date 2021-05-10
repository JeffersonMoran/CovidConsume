const CardData = (props) => {
    const { country } = props;
    return (
        <div>
            <h4>Dados:</h4>
            <div>
                <p>Casos: {country.cases} </p>
            </div>
            <div>
                <p>Mortes: {country.deaths} </p>
            </div>
            <div>
                <p>Casos por milhao de habitante: {country.casesPerOneMillion} </p>
            </div>
            <div>
                <p>Recuperados: {country.recovered} </p>
            </div>
        </div>
    )
}

export default CardData;