import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../redux/reducers.js';
import CountriesList from '../core/CountriesList';

let store=createStore(combinedReducer);

class MainPage extends React.PureComponent {

  render() {

    return (
      <Provider store={store}>
          <div>
              <h1>Страны</h1>
              <CountriesList />
          </div>
      </Provider>
    );

  }

}

export default MainPage;
