import React from 'react';
//import PropTypes from 'prop-types';

import './ExampleComponent.css';

class ExampleComponent extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="SExampleComponent">
        Пример компонента
      </div>
    )
    ;

  }

}

export default ExampleComponent;
