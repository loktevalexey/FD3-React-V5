import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducer from '../redux/reducers.js';
import CountriesList from '../core/CountriesList';

let store=createStore(combinedReducer, applyMiddleware(thunk));

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
