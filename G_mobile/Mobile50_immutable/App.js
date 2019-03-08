"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, fio:"Иванов И.И.", balance:200}, 
  {id:105, fio:"Сидоров С.С.", balance:250}, 
  {id:110, fio:"Петров П.П.", balance:180},
  {id:120, fio:"Григорьев Г.Г.", balance:220},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

