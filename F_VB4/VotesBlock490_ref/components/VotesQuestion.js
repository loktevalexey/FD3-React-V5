import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };
  
  state = {
    question: this.props.question,
  };

  newTextRef = null;

  setNewTextRef = (ref) => {
    this.newTextRef=ref;
  };

  setNewText = () => {
    if ( this.newTextRef ) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
      let newText=this.newTextRef.value;
      this.setState({question:newText});
    }
  };

  render() {
    return (
      <div>
        <input type="text" defaultValue="новый текст вопроса" ref={this.setNewTextRef} />
        <input type="button" value="задать" onClick={this.setNewText} />
        <div className='VotesQuestion'>{this.state.question}</div>
      </div>
    );
  }

}

export default VotesQuestion;
