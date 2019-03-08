import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    fio: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  };

  state = {
    balance: this.props.balance,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.id+" componentWillReceiveProps");
    this.setState({balance:newProps.balance});
  };

  shouldComponentUpdate = (newProps,newState) => {
    return (newProps.fio!=this.props.fio)||(newState.balance!=this.state.balance);
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.state.balance}</span>
        <span className='MobileClientFIO'>{this.props.fio}</span>
      </div>
    );

  }

}

export default MobileClient;
