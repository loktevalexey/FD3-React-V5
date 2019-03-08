import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { countriesThunkAC } from "../redux/fetchThunk";

class CountriesList extends React.PureComponent {

  static propTypes = {
    countries: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch( countriesThunkAC(this.props.dispatch) );
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
