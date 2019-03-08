import React from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom-factories';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };
  
  render() {
    return DOM.div( {className:'VotesQuestion'}, this.props.question );
  }

}

export default VotesQuestion;
