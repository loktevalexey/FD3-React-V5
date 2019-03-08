var VotesAnswer = React.createClass({

  displayName: 'VotesAnswer',

  propTypes: {
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
  },

  render: function() {

    return React.DOM.div( {className:'VotesBlockAnswer'},
      React.DOM.span({className:'Count'},this.props.count),
      React.DOM.span({className:'Text'},this.props.text),
    );
  },

});