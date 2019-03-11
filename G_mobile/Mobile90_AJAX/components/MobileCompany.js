import React from 'react';
import isoFetch from 'isomorphic-fetch';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);
    // this.loadData();
    // не надо запускать асинхронные или долгие операции из конструктора
    // конструктор инициализирует только КЛАСС, это ещё не React-компонент
    // конструктор должен быть лёгким и быстрым
  }

  componentDidMount() {
    this.loadData();
  }

  state = {
    dataReady: false,
    name: "???",
    clients: [],
  };

  fetchError = (errorMessage) => {
    console.error(showStr);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({
      dataReady:true,
      name:loadedData.companyName,
      clients:loadedData.clientsArr,
    });
  };

  loadData = () => {

    isoFetch("http://fe.it-academy.by/TestFetch.php", {
        method: 'post',
        headers: {
            "Accept": "application/json",
        },
    })
        .then( response => { // response - HTTP-ответ
            if (!response.ok)
                throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
            else
                return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( data => {
            this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
        })
        .catch( error => {
            this.fetchError(error.message);
        })
    ;

  };

  render() {

    if ( !this.state.dataReady )
      return <div>загрузка данных...</div>;

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
      </div>
    )
    ;

  }

}

export default MobileCompany;
