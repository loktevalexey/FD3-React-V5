import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  render() {

    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.props.info.balance}</span>
        <span className='MobileClientFIO'>{this.props.info.fio}</span>
      </div>
    );

  }

}

export default MobileClient;
