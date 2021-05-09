import React, { useState, useEffect } from 'react';
import { listaCovidData, calculateData } from '../store/covidData';
import { useDispatch, useSelector } from "react-redux";
import CardList from '../components/CardList';

const DataScreen = () => {
    const search = useState("");
    const covid_data = useSelector(state => state.covidDataReducer.covid_data);
    const countries_most_cases = useSelector(state => state.covidDataReducer.countries_most_cases);
    const countries_less_cases = useSelector(state => state.covidDataReducer.countries_less_cases);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listaCovidData())
    }, []);

    useEffect(() => {
        dispatch(calculateData(covid_data))
    }, [covid_data]);

    return (
        <div>
            <CardList countries={countries_most_cases} titulo={"Paises com mais casos"}/>
            <CardList countries={countries_less_cases} titulo={"Paises com menos casos"}/>
        </div>
    )
}

export default DataScreen