import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    auxClassName: PropTypes.string.isRequired,
  };
  
  componentWillReceiveProps = (newProps)           => { console.log('componentWillReceiveProps'); };
  componentWillUpdate       = ()                   => { console.log('componentWillUpdate');       };
  componentDidUpdate        = (oldProps, oldState) => { console.log('componentDidUpdate');        };
  componentWillMount        = ()                   => { console.log('componentWillMount');        };
  componentDidMount         = ()                   => { console.log('componentDidMount');         };
  componentWillUnmount      = ()                   => { console.log('componentWillUnmount');      };
  
  render() {
    return <div className={'VotesQuestion '+this.props.auxClassName}>{this.props.question}</div>;
  }

}

export default VotesQuestion;
