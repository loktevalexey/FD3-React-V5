import React from 'react';
import PropTypes from 'prop-types';

import './VotesQuestion.css';

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
    auxClassName: PropTypes.string.isRequired,
  };
  
  state = {
    auxClassName: this.props.auxClassName, // сработает при построении компонента (constructor+WM+DM)
  }
  
  componentWillReceiveProps = (newProps) => {
    console.log('componentWillReceiveProps'); 
    this.setState({auxClassName:newProps.auxClassName,}); // сработает при обновлении компонента (WRP+WU+DU)
  };

  componentWillUpdate       = ()                   => { console.log('componentWillUpdate');       };
  componentDidUpdate        = (oldProps, oldState) => { console.log('componentDidUpdate');        };
  componentWillMount        = ()                   => { console.log('componentWillMount');        };
  componentDidMount         = ()                   => { console.log('componentDidMount');         };
  componentWillUnmount      = ()                   => { console.log('componentWillUnmount');      };
  
  render() {
    return <input type="text" className={'VotesQuestion '+this.state.auxClassName} defaultValue={this.props.question} />;
  }

}

export default VotesQuestion;
