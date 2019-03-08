import React from 'react';

import './VotesQuestion.css';

var VotesQuestion = React.createClass({

  displayName: 'VotesQuestion',

  propTypes: {
    question: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.DOM.div( {className:'VotesQuestion'}, this.props.question );
  },

});

export default VotesQuestion;
