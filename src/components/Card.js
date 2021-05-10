import { useState } from 'react';
import styled from 'styled-components';
import { BACKGROUND_COLORS } from '../constants/colors';
import CardData from './CardData';

const CardStyleWrapper = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 30px;
    margin: 30px;
    min-width: 15%;
    height: 200px;
    align-items: center;
    justify-content: center;
    display: flex;
    box-shadow: 5px 3px 13px -10px rgba(0, 0, 0, 0.8);
    &:hover {
        background-image: linear-gradient(to top, ${props => BACKGROUND_COLORS[props.background_color]}, transparent);
    }
`;

const Card = (props) => {
    const { country, background_color } = props;
    const [show_data, setShouldData] = useState(false);

    const should_show_data = () => {
        if (!show_data) return false;
        return (<CardData country={country}/>)
    }

    return (
        <CardStyleWrapper background_color={background_color} onMouseOver={() => setShouldData(true)} onMouseLeave={() => setShouldData(false)}>
            {!should_show_data(country) && <h3>{country.country}</h3>}
            {should_show_data(country)}
        </CardStyleWrapper>
    )
}

export default Card;