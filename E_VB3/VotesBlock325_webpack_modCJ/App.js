"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var VotesBlock = require('./components/VotesBlock');

var questionText='Как вы относитесь к программированию?';
var answersArr=[ 
  {text:'хорошо',code:1,count:200}, 
  {text:'не получается',code:2,count:100}, 
  {text:'избегаю',code:3,count:300},
  {text:'другой ответ',code:4,count:50,freeanswer:true},
];
var defaultFreeAnswerText="???";

ReactDOM.render(
  React.createElement(VotesBlock,{question:questionText,answers:answersArr,
    deffreeanswertext: defaultFreeAnswerText,startWorkMode:1}), 
  document.getElementById('container') 
);

