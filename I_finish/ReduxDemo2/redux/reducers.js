import { combineReducers } from 'redux';

import countersReducer from "./countersReducer";

let combinedReducer=combineReducers({
    // редьюсер countersReducer отвечает за раздел state под именем counters
    counters: countersReducer, 
    // + другие редьюсеры
});

export default combinedReducer;
