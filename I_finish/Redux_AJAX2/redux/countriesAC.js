const COUNTRIES_LOADING='COUNTRIES_LOADING';
const COUNTRIES_ERROR='COUNTRIES_ERROR';
const COUNTRIES_SET='COUNTRIES_SET';

const countriesLoadingAC=function() {
  return {
    type: COUNTRIES_LOADING,
  };
}

const countriesErrorAC=function() {
  return {
    type: COUNTRIES_ERROR,
  };
}

const countriesSetAC=function(countries) {
  return {
    type: COUNTRIES_SET,
    countries:countries,
  };
}

export {
  countriesLoadingAC,COUNTRIES_LOADING,
  countriesErrorAC,COUNTRIES_ERROR,
  countriesSetAC,COUNTRIES_SET,
}
