"use strict";

var _themeGet = require("../../theme-get");

var theme = {
  colors: {
    blue: '#07c',
    black: '#111'
  }
};
test('themeGet returns values from the theme', function () {
  var a = (0, _themeGet.themeGet)('colors.blue')({
    theme: theme
  });
  expect(a).toBe('#07c');
});
test('themeGet does not throw when value doesnt exist', function () {
  var a = (0, _themeGet.themeGet)('colors.blue.5')({
    theme: theme
  });
  expect(a).toBe(null);
});
test('themeGet accepts a fallback', function () {
  var a = (0, _themeGet.themeGet)('colors.lightblue', '#0cf')({
    theme: theme
  });
  expect(a).toBe('#0cf');
});