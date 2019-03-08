import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './VotesAnswer.css';

class VotesAnswer extends React.Component {

  static propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    workMode: PropTypes.number.isRequired,
    freeanswer: PropTypes.bool,
    freeanswertext: PropTypes.string.isRequired,
    cbFreeAnswerTextChanged: PropTypes.func.isRequired,
    cbSelected: PropTypes.func.isRequired,
    selectedAnswerCode: PropTypes.number, // может быть null, пока ни один ответ не выбран
  };

  answerClicked = (EO) => {
    this.props.cbSelected(this.props.code);
  }

  freeAnswerTextChanged = (EO) => { 
    console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); 
    this.props.cbFreeAnswerTextChanged(EO.target.value);
  }

  render() {

    if ( this.props.workMode==1 ) {
      return DOM.div(null,
        DOM.label({className:'VotesBlockAnswer'},
          DOM.input({type:'radio',value:this.props.code,name:'voteanswer',
            checked:(this.props.selectedAnswerCode==this.props.code),
            onClick:this.answerClicked}),
          DOM.span(null,this.props.text),
          this.props.freeanswer
            ?DOM.input({type:'text',name:'votefreeanswer',className:'FreeAnswer',
              defaultValue:this.props.freeanswertext,onChange:this.freeAnswerTextChanged,
              disabled:(this.props.selectedAnswerCode!=this.props.code)
            })
            :null
        ),
      );
    }
    else {
      return DOM.div( {className:'VotesBlockAnswer'},
        DOM.span({className:'Count'},this.props.count),
        DOM.span({className:'Text'},this.props.text)
      );
    }

  }

}

export default VotesAnswer;
