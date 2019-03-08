import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    color: PropTypes.string.isRequired,
  };
  
  render() {
    return (
      <div style={{border:"dashed 1px "+this.props.color,padding:"10px"}}>
        {this.props.children}
      </div>
    );
  }

}

export default ColorFrame;
