var MyComponent = React.createClass({

  displayName: 'MyComponent',

  render: function(){

    return React.DOM.div( {className:'MyComponentFrame'}, 
      React.DOM.h1( null, "Всем привет!" ),
      React.DOM.div( {className:'MyComponentText'}, "Начинаем изучение React!" ),
    );
  },

});