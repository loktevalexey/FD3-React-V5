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

    let button1=
      <div>
        Кнопка №1
        <input type="button" value="кнопка 1" onClick={this.button1Clicked} />
      </div>
    ;

    let button2=
      <div>
        Кнопка №2
        <input type="button" value="кнопка 2" onClick={this.button2Clicked} style={{backgroundColor:"yellow"}} />
      </div>
    ;

    return (
      <div className="Blocks">

        <Rainbow getInner={ ()=>button1 } />

        <Rainbow getInner={ ()=>button2 } />
        
      </div>
    )
    ;

  }

}

export default Blocks;
