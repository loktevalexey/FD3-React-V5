var React = require('react');

require('./VotesBlock.css');

var VotesQuestion = require('./VotesQuestion');
var VotesAnswer = require('./VotesAnswer');

var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  propTypes: {
    startWorkMode: React.PropTypes.number.isRequired,
    question: React.PropTypes.string.isRequired,
    answers:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        count: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        freeanswer: React.PropTypes.bool,
      })
    ),
    deffreeanswertext: React.PropTypes.string.isRequired,
  },

  getInitialState: function() {
    return { 
      selectedAnswerCode: null,
      freeanswertext:this.props.deffreeanswertext,
      workMode:this.props.startWorkMode,
    };
  },

  answerSelected: function(code) {
    console.log('выбран ответ с кодом '+code);
    this.setState( {selectedAnswerCode:code} );
  },

  vote: function() {
    console.log('голосование завершено, выбран ответ с кодом '+this.state.selectedAnswerCode);

    this.props.answers.forEach( answer => {
      if ( answer.code==this.state.selectedAnswerCode )
        answer.count++;
    } );

    this.setState( {workMode:2} );
  },

  freeAnswerTextChanged: function(fat) { 
    console.log('VotesBlock: текст свободного ответа изменён - '+fat); 
    this.setState( {freeanswertext:fat} );
  },

  render: function() {

    var answersCode=this.props.answers.map( v =>
      React.createElement(VotesAnswer, {key:v.code,
        text:v.text, count:v.count, code:v.code, 
        freeanswer:v.freeanswer, freeanswertext:this.state.freeanswertext, 
        cbSelected:this.answerSelected,
        cbFreeAnswerTextChanged:this.freeAnswerTextChanged,
        selectedAnswerCode:this.state.selectedAnswerCode,
        workMode:this.state.workMode,
      })
    );

    return React.DOM.div( {className:'VotesBlock'}, 
      React.createElement(VotesQuestion, {question:this.props.question} ),
      React.DOM.div( {className:'Answers'}, answersCode ),
      ((this.state.workMode==1)&&this.state.selectedAnswerCode)
        ?React.DOM.input( {type:'button',value:'проголосовать',onClick:this.vote} )
        :null
    );

  },

});

module.exports = VotesBlock;
