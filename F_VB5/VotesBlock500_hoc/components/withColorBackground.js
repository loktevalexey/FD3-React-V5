import React from 'react';

function withColorBackground(Component) {
    // HOC withColorBackground должен вернуть КОМПОНЕНТ
    // в данном случае возвращаем компонент в функциональном стиле
    return props => (
      <div style={{backgroundColor:"yellow"}}>
        <Component {...props} />
      </div>
    );
}

export { withColorBackground };
