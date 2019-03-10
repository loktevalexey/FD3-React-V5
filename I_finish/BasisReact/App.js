"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ExampleComponent from './components/ExampleComponent';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <ExampleComponent />
, document.getElementById('container') );
