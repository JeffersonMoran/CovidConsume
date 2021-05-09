import * as covidApi from "../services/covid-api";

const TAG = "COVID_DATA_REDUX";

export const type = {
    LIST_LOADING: "LIST_LOADING",
    LIST_SUCCESS: "LIST_SUCCESS",
    SET_MOST_CASES: "SET_MOST_CASES",
    SET_LESS_CASES: "SET_LESS_CASES",
};

const initialState = {
    loading: false,
    covid_data: [],
    countries_most_cases: [],
    countries_less_cases: []
};

const covidDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LIST_LOADING:
            return {
                ...state,
                loading: true
            };

        case type.LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                covid_data: action.payload
            };

        case type.SET_MOST_CASES:
            return {
                ...state,
                countries_most_cases: action.payload
            };

        case type.SET_LESS_CASES:
            return {
                ...state,
                countries_less_cases: action.payload
            };

        default:
            return state;
    }
};

export const listaCovidData = payload => async dispatch => {
    try {
        dispatch({ type: type.LIST_LOADING });
        const response = await covidApi.listByCountries();
        dispatch({ type: type.LIST_SUCCESS, payload: response.data });
    } catch (e) {
        console.log('erro', e);
    }
};

export const calculateData = (payload = []) => async dispatch => {
    try {
        dispatch({ type: type.SET_MOST_CASES, payload: payload.slice(1, 6) });
        dispatch({ type: type.SET_LESS_CASES, payload: payload.slice(-5) });
    } catch (e) {
        console.log('erro', e);
    }
}


export default covidDataReducer;