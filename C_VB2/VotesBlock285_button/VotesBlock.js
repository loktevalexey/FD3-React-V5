var VotesBlock = React.createClass({

  displayName: 'VotesBlock',

  propTypes: {
    workMode: React.PropTypes.number.isRequired,
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
    };
  },

  answerSelected: function(code) {
    console.log('выбран ответ с кодом '+code);
    this.setState( {selectedAnswerCode:code} );
  },

  selectAnswer4: function() {
    this.answerSelected(4);
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
        workMode:this.props.workMode,
      })
    );

    return React.DOM.div( {className:'VotesBlock'}, 
      React.createElement(VotesQuestion, {question:this.props.question} ),
      React.DOM.div( {className:'Answers'}, answersCode ),
      React.DOM.input( {type:'button',value:'выбрать вариант 4',onClick:this.selectAnswer4} ),
    );

  },

});