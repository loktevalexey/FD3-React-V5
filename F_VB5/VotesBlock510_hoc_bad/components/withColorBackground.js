import React from 'react';

function withColorBackground(color,Component) {
    return props => (
      <div style={{backgroundColor:color}}>
        <Component {...props} />
      </div>
    );
}

export { withColorBackground };
