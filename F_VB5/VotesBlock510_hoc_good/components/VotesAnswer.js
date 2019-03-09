import React from 'react';
import PropTypes from 'prop-types';

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
      return (
        <div>
          <label className='VotesBlockAnswer'>
            <input type='radio' value={this.props.code} name='voteanswer'
              checked={this.props.selectedAnswerCode==this.props.code}
              onClick={this.answerClicked}
            />
            <span>{this.props.text}</span>
            {
              (this.props.freeanswer) &&
              <input type='text' name='votefreeanswer' className='FreeAnswer'
                defaultValue={this.props.freeanswertext} onChange={this.freeAnswerTextChanged}
                disabled={this.props.selectedAnswerCode!=this.props.code}
              />
            }
          </label>
        </div>
      )
    }
    else {
      return (
        <div className='VotesBlockAnswer'>
          <span className='Count'>{this.props.count}</span>
          <span className='Text'>{this.props.text}</span>
        </div>
      );
    }

  }

}

export default VotesAnswer;
