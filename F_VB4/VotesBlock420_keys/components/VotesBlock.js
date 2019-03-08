import React from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';

class VotesBlock extends React.Component {

  static propTypes = {
    startWorkMode: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answers:PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        freeanswer: PropTypes.bool,
      })
    ),
    deffreeanswertext: PropTypes.string.isRequired,
  };

  state = {
    selectedAnswerCode: null,
    freeanswertext:this.props.deffreeanswertext,
    workMode:this.props.startWorkMode,
    visibleQuestionNum: 1,
  }

  answerSelected = (code) => {
    console.log('выбран ответ с кодом '+code);
    this.setState( {selectedAnswerCode:code} );
  }

  vote = () => {
    console.log('голосование завершено, выбран ответ с кодом '+this.state.selectedAnswerCode);

    this.props.answers.forEach( answer => {
      if ( answer.code==this.state.selectedAnswerCode )
        answer.count++;
    } );

    this.setState( {workMode:2} );
  }

  freeAnswerTextChanged = (fat) => { 
    console.log('VotesBlock: текст свободного ответа изменён - '+fat); 
    this.setState( {freeanswertext:fat} );
  }

  showRedQuestion = () => {
    this.setState({visibleQuestionNum:1});
  };

  showBlueQuestion = () => {
    this.setState({visibleQuestionNum:2});
  };
  
  render() {

    var answersCode=this.props.answers.map( v =>
      <VotesAnswer key={v.code}
        text={v.text} count={v.count} code={v.code}
        freeanswer={v.freeanswer} freeanswertext={this.state.freeanswertext}
        cbSelected={this.answerSelected}
        cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
        selectedAnswerCode={this.state.selectedAnswerCode}
        workMode={this.state.workMode}
      />
    );

    return (
      <div className='VotesBlock'>
        <input type="button" value="красный" onClick={this.showRedQuestion} />
        <input type="button" value="синий" onClick={this.showBlueQuestion} />
        {
          (this.state.visibleQuestionNum==1) &&
          <VotesQuestion key={1} question={this.props.question} auxClassName="VotesQuestionRed" />
        }
        {
          (this.state.visibleQuestionNum==2) &&
          <VotesQuestion key={1} question={this.props.question} auxClassName="VotesQuestionBlue" />
        }
        <div className='Answers'>{answersCode}</div>
        {
          ((this.state.workMode==1)&&this.state.selectedAnswerCode) &&
          <input type='button' value='проголосовать' onClick={this.vote} />
        }
      </div>
    )
    ;

  }

}

export default VotesBlock;
