var VotesAnswer = React.createClass({

  displayName: 'VotesAnswer',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    count: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    workMode: React.PropTypes.number.isRequired,
  },

  render: function() {

    if ( this.props.workMode==1 ) {
      return React.DOM.div(null,
        React.DOM.label({className:'VotesBlockAnswer'},
          React.DOM.input({type:'radio',value:this.props.code,name:'voteanswer'}),
          React.DOM.span(null,this.props.text)
        ),
      );
    }
    else {
      return React.DOM.div( {className:'VotesBlockAnswer'},
        React.DOM.span({className:'Count'},this.props.count),
        React.DOM.span({className:'Text'},this.props.text),
      );
    }


  },

});