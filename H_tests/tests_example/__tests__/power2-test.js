"use strict";

import {power2} from '../modules/power2';

test('проверка возведения 2 в разные степени', () => {

  expect(power2(3)).toBe(8);

  expect(power2(6)).toBe(64);

  expect(power2(10)).toBe(1024);

});
