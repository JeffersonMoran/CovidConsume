import styled from 'styled-components';

const CardStyleWrapper = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 30px;
    margin: 30px;
`;

const Card = (props) => {
    const { country } = props;
    return (
        <CardStyleWrapper>
            <h3>{country.country}</h3>
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
        </CardStyleWrapper>
    )
}

export default Card;