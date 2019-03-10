import React from 'react';
import renderer from 'react-test-renderer';

import ExampleComponent from '../components/ExampleComponent';

test('работа ExampleComponent', () => {

  const component = renderer.create(
    <ExampleComponent />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
