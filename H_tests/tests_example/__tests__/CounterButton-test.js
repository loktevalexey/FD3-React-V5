"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import CounterButton from '../components/CounterButton';

test('работа CounterButton', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <CounterButton />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.find( el => el.type=='input' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё
  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
