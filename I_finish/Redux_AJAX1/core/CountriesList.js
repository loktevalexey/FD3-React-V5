import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import { countriesLoadingAC, countriesErrorAC, countriesSetAC } from "../redux/countriesAC";

class CountriesList extends React.PureComponent {

  static propTypes = {
    countries: PropTypes.object.isRequired,
  };

  componentDidMount() {

    this.props.dispatch( countriesLoadingAC() ); // переводим раздел countries стора в состояние "загружается"

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
            this.props.dispatch( countriesSetAC(data.rows) ); // переводим раздел countries стора в состояние "ошибка"
        })
        .catch( (error) => {
            console.error(error);
            this.props.dispatch( countriesErrorAC() ); // переводим раздел countries стора в состояние "ошибка"
          })
    ;

  }

  render() {

    if ( this.props.countries.status<=1 )
      return "загрузка...";

    if ( this.props.countries.status===2 )
      return "ошибка загрузки данных";

    return (
      <ul>
        {
          this.props.countries.data.map( (countryInfo,index) => <li key={index}>{countryInfo[1]}</li> )
        }
      </ul>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(CountriesList);
