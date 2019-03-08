import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  shouldComponentUpdate = (newProps,newState) => {
    if ( newState.name!=this.state.name )
      return true; // если название компании изменилось - перерисовываем
    if ( newState.clients.length!=this.state.clients.length )
      return true; // если количество клиентов изменилось - перерисовываем
    let clientsChanged=false; // из forEach нельзя сделать return - это будет return из функции forEach
    newState.clients.forEach( (newClient,i) => {
      let oldClient=this.state.clients[i];
      if ( oldClient.fio!=newClient.fio )
        clientsChanged=true; // если фамилия клиента изменилась - перерисовываем
      if ( oldClient.balance!=newClient.balance )
        clientsChanged=true; // если баланс клиента изменился - перерисовываем
      /*
      // с балансом вот так было бы оптимальнее, но нарушаются принцип DRY, принцип единственной ответственности, инкапсуляция
      let oldActive=oldClient.balance>=0;
      let newActive=newClient.balance>=0;
      if ( oldActive!=newActive )
        clientsChanged=true; // если признак активности/блокировки клиента изменился - перерисовываем
      */
    } );
    if ( clientsChanged )
      return true;
    return false; // раз интересующей нас разницы не нашлось - не перерисовываем
  };
  
  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  updateBalance = (clientId,delta) => {
    let newClients=this.state.clients.map( client => {
      let newClient={...client};
      if ( newClient.id==clientId )
        newClient.balance+=delta;
      return newClient;
    } );
    this.setState({clients:newClients});
  };

  updateBalance1 = () => {
    this.updateBalance(105,-1);
  };

  updateBalance2 = () => {
    this.updateBalance(105,1);
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( c =>
      <MobileClient key={c.id} id={c.id} fio={c.fio} balance={c.balance} />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Сидоров--" onClick={this.updateBalance1} />
        <input type="button" value="Сидоров++" onClick={this.updateBalance2} />
      </div>
    )
    ;

  }

}

export default MobileCompany;
