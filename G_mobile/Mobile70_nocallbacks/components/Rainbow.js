import React from 'react';
import PropTypes from 'prop-types';

import './Rainbow.css';

class Rainbow extends React.PureComponent {

  render() {

    return (
      <div className="Frame1">
        <div className="Frame2">
          <div className="Frame3">
            {this.props.children}
          </div>
        </div>
      </div>
    )
    ;

  }

}

export default Rainbow;
