import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class intCounterDisplay extends React.PureComponent {

  static propTypes = {
    cnt: PropTypes.number.isRequired, // получено из Redux
  };

  render() {

    return (
      <div className="CounterDisplay">
        Значение счётчика: {this.props.cnt}
      </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    // из раздела Redux с именем counter свойство cnt будет доступно
    // данному компоненту как this.props.cnt
    cnt: state.counter.cnt,
  };
};

// присоединяем (connect) компонент к хранилищу Redux
const CounterDisplay = connect(mapStateToProps)(intCounterDisplay);

export default CounterDisplay;
