"use strict";

var _styledSystem = require("../../styled-system");

test('returns consistent responsive styles', function () {
  var a = (0, _styledSystem.layout)({
    display: ['none', 'block'],
    width: ['100%', '100%', '50%', '25%']
  });
  var b = (0, _styledSystem.layout)({
    width: ['100%', '100%', '50%', '25%'],
    display: ['none', 'block']
  });
  expect(a).toEqual({
    width: '100%',
    display: 'none',
    '@media screen and (min-width: 40em)': {
      display: 'block',
      width: '100%'
    },
    '@media screen and (min-width: 52em)': {
      width: '50%'
    },
    '@media screen and (min-width: 64em)': {
      width: '25%'
    }
  });
  expect(b).toEqual({
    width: '100%',
    display: 'none',
    '@media screen and (min-width: 40em)': {
      display: 'block',
      width: '100%'
    },
    '@media screen and (min-width: 52em)': {
      width: '50%'
    },
    '@media screen and (min-width: 64em)': {
      width: '25%'
    }
  });
});
test('null values return responsive styles in the correct order', function () {
  var a = (0, _styledSystem.space)({
    m: [1, null, 3],
    p: [1, 2, 3]
  });
  expect(Object.keys(a)).toEqual(['margin', '@media screen and (min-width: 40em)', '@media screen and (min-width: 52em)', 'padding']);
});
test('object values return responsive styles in the correct order', function () {
  var a = (0, _styledSystem.space)({
    theme: {
      disableStyledSystemCache: true,
      breakpoints: {
        small: '40em',
        medium: '52em',
        large: '64em'
      }
    },
    m: {
      _: 0,
      small: 1,
      large: 3
    },
    p: {
      _: 0,
      small: 1,
      medium: 2,
      large: 3
    }
  });
  expect(Object.keys(a)).toEqual(['@media screen and (min-width: 40em)', '@media screen and (min-width: 52em)', '@media screen and (min-width: 64em)', 'margin', 'padding']);
});