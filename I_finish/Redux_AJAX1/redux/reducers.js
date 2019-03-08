import { combineReducers } from 'redux';

import countriesReducer from "./countriesReducer";

let combinedReducer=combineReducers({
    countries: countriesReducer, // редьюсер countriesReducer отвечает за раздел state под именем countries
    // + другие редьюсеры
});

export default combinedReducer;
