import React from 'react';
import PropTypes from 'prop-types';

import Rainbow from './Rainbow';

import './Blocks.css';

class Blocks extends React.PureComponent {

  button1Clicked = () => {
    alert("кнопка 1 нажата");
  }

  button2Clicked = () => {
    alert("кнопка 2 нажата");
  }

  render() {

    return (
      <div className="Blocks">

        <Rainbow>
          Кнопка №1
          <input type="button" value="кнопка 1" onClick={this.button1Clicked} />
        </Rainbow>

        <Rainbow>
          Кнопка №2
          <input type="button" value="кнопка 2" onClick={this.button2Clicked} style={{backgroundColor:"yellow"}} />
        </Rainbow>
        
      </div>
    )
    ;

  }

}

export default Blocks;
