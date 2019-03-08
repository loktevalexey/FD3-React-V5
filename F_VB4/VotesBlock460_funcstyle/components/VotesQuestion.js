import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

const VotesQuestion = props => {
  return <div className='VotesQuestion'>{props.question}</div>;
}

VotesQuestion.propTypes = {
  question: PropTypes.string.isRequired,
};

export default VotesQuestion;

// если propTypes не нужны, можно короче (экспортируется безымянная функция):
/*
import React from 'react';

import './VotesQuestion.css';

export default props => {
  return <div className='VotesQuestion'>{props.question}</div>;
}
*/

// если всё что делает render - это return (т.е. нет никакой логики перед return), можно ещё короче:
/*
import React from 'react';

import './VotesQuestion.css';

export default props => <div className='VotesQuestion'>{props.question}</div>;
*/