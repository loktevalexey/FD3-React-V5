import React from 'react';
import PropTypes from 'prop-types';

class MobileClientInfo extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  render() {

    return (
      <h1>
        клиент &laquo;{this.props.info.fio}&raquo;, баланс {this.props.info.balance}
      </h1>
    )
    ;

  }

}

export default MobileClientInfo;
