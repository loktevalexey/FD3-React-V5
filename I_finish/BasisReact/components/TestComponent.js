import React from 'react';
//import PropTypes from 'prop-types';

import './TestComponent.css';

class TestComponent extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="STestComponent">
        Тестовый компонент
      </div>
    )
    ;

  }

}

export default TestComponent;
