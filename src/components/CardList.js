import Card from './Card';
import styled from 'styled-components';

const BoxCard = styled.div`
    width: 100%;
`;


const BoxTitulo = styled.div`
    padding-left: 20px;
`;

const CardList = (props) => {
    const { countries, titulo } = props;
    return (
        <BoxCard>
            <BoxTitulo>
                <h2>{titulo}</h2>
            </BoxTitulo>
            <div style={{ display: 'flex' }}>
                {countries.map(country => {
                    return (
                        <Card country={country} />
                    )
                })}
            </div>
        </BoxCard>
    )
}

export default CardList;