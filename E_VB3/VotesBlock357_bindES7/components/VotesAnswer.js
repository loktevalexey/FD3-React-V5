import React from 'react';

import './VotesAnswer.css';

class VotesAnswer extends React.Component {

  static propTypes = {
    code: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    workMode: React.PropTypes.number.isRequired,
    freeanswer: React.PropTypes.bool,
    freeanswertext: React.PropTypes.string.isRequired,
    cbFreeAnswerTextChanged: React.PropTypes.func.isRequired,
    cbSelected: React.PropTypes.func.isRequired,
    selectedAnswerCode: React.PropTypes.number, // может быть null, пока ни один ответ не выбран
  };

  answerClicked(EO) {
    this.props.cbSelected(this.props.code);
  }

  freeAnswerTextChanged(EO) { 
    console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); 
    this.props.cbFreeAnswerTextChanged(EO.target.value);
  }

  render() {

    if ( this.props.workMode==1 ) {
      return React.DOM.div(null,
        React.DOM.label({className:'VotesBlockAnswer'},
          React.DOM.input({type:'radio',value:this.props.code,name:'voteanswer',
            checked:(this.props.selectedAnswerCode==this.props.code),
            onClick: (::this.answerClicked)}),
          React.DOM.span(null,this.props.text),
          this.props.freeanswer
            ?React.DOM.input({type:'text',name:'votefreeanswer',className:'FreeAnswer',
              defaultValue:this.props.freeanswertext,onChange: (::this.freeAnswerTextChanged),
              disabled:(this.props.selectedAnswerCode!=this.props.code)
            })
            :null
        ),
      );
    }
    else {
      return React.DOM.div( {className:'VotesBlockAnswer'},
        React.DOM.span({className:'Count'},this.props.count),
        React.DOM.span({className:'Text'},this.props.text)
      );
    }

  }

}

export default VotesAnswer;
