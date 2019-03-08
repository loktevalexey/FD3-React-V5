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
      freeanswertext:this.props.deffreeanswertext,
      cnt: 0,
    };
  },

  freeAnswerTextChanged: function(fat) { 
    console.log('VotesBlock: текст свободного ответа изменён - '+fat); 
    this.setState( {freeanswertext:fat} );
  },

  cntPlus3: function() {
    this.setState( (prevState, props) => { return {cnt:prevState.cnt+1}; } );
    this.setState( (prevState, props) => { return {cnt:prevState.cnt+1}; } );
    this.setState( (prevState, props) => { return {cnt:prevState.cnt+1}; } );
  },

  render: function() {

    var answersCode=this.props.answers.map( v =>
      React.createElement(VotesAnswer, {key:v.code,
        text:v.text, count:v.count, code:v.code, 
        freeanswer:v.freeanswer, freeanswertext:this.state.freeanswertext, cbFreeAnswerTextChanged:this.freeAnswerTextChanged,
        workMode:this.props.workMode,
      })
    );
    return React.DOM.div( {className:'VotesBlock'}, 
      React.createElement(VotesQuestion, {question:this.props.question} ),
      React.DOM.div( {className:'Answers'}, answersCode ),
      React.DOM.div( null, this.state.freeanswertext+" "+this.state.cnt ),
      React.DOM.input( {type:'button',value:'+=3',onClick:this.cntPlus3} ),
    );
  },

});