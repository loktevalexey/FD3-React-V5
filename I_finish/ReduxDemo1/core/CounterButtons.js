import React from 'react';
import {connect} from 'react-redux';

class intCounterButtons extends React.PureComponent {

  incCounter = () => {
    this.props.dispatch( { type:"INC" } );
  }

  decCounter = () => {
    this.props.dispatch( { type:"DEC" } );
  }
  
  render() {

    return (
      <div className="CounterButtons">
        <input type='button' value='-' onClick={this.decCounter} />
        <input type='button' value='+' onClick={this.incCounter} />
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

// но этому компоненту нужен сам this.props.dispatch, и чтобы
// он появился, следует присоединить (connect) компонент к хранилищу Redux
const CounterButtons = connect(mapStateToProps)(intCounterButtons);

export default CounterButtons;
