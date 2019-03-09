import React from 'react';

function withColorBackground(color) {
    return function(Component) {
      return props => (
        <div style={{backgroundColor:color}}>
          <Component {...props} />
        </div>
      );
    };
}

/*
let withColorBackground = color => Component => props =>
    <div style={{backgroundColor:color}}>
      <Component {...props} />
    </div>
;
*/

export { withColorBackground };
