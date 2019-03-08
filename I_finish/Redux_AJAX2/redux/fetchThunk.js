import isoFetch from 'isomorphic-fetch';

import { countriesLoadingAC, countriesErrorAC, countriesSetAC } from "./countriesAC";

function countriesThunkAC(dispatch) {
    // Как и любой action creator, countriesThunkAC должен вернуть action,
    // только action будет не хэш, а ФУНКЦИЯ.
    // Все middleware стоят ДО редьюсеров, их задача - преобразовывать или фильтровать action-ы.
    // Конкретно middleware "thunk", если обнаруживает что action - функция а не хэш, 
    // ВЫПОЛНЯЕТ эту функцию и не пропускает её дальше, к редьюсерам.
    return function() {
        dispatch( countriesLoadingAC() );
        isoFetch("http://fe.it-academy.by/Examples/net_city/countries.json")
            .then( (response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err=new Error("fetch error " + response.status);
                    Err.userMessage="Ошибка связи";
                    throw Err;
                }
                else
                    return response.json();
            })
            .then( (data) => {
                dispatch( countriesSetAC(data.rows) );
            })
            .catch( (error) => {
                console.error(error);
                dispatch( countriesErrorAC() );
            })
        ;
    }

}

export {countriesThunkAC};
