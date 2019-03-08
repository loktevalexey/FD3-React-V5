import React from 'react';

import {power2} from '../modules/power2';

class CounterButton extends React.PureComponent {

  state = {
    counter: 0
  };

  pressed = () => {
    this.setState({counter:this.state.counter+1});
  };

  render() {

    return (
      <div>
        <h3>Кнопка-счётчик нажатий</h3>
        <input type="button" value={"нажатий: "+this.state.counter+', степень двойки: '+power2(this.state.counter)} onClick={this.pressed} />
      </div>
    )
    ;

  }

}

export default CounterButton;
