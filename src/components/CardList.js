import Card from './Card';
import styled from 'styled-components';

const BoxTitulo = styled.h2`
    padding-left: 20px;
`;

const CardList = (props) => {
    const { countries, titulo } = props;
    return (
        <div className='container'>
            <BoxTitulo>
                <h2>{titulo}</h2>
            </BoxTitulo>
            <div className='row'>
                {countries.map(country => {
                    return (
                        <Card country={country} className="col-md-4" />
                    )
                })}
            </div>
        </div>
    )
}

export default CardList;