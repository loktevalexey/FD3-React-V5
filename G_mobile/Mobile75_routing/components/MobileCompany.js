import React from 'react';
import PropTypes from 'prop-types';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <h1>
        Компания &laquo;{this.props.name}&raquo;
      </h1>
    )
    ;

  }

}

export default MobileCompany;
