"use strict";
exports.__esModule = true;
var position_1 = require("../../parsers/position");
test('returns position styles', function () {
    var style = position_1["default"]({
        position: 'absolute',
        top: 0,
        right: 0
    });
    expect(style).toEqual({
        position: 'absolute',
        top: 0,
        right: 0
    });
});
test('returns theme values', function () {
    var style = position_1["default"]({ top: 1, right: 2, bottom: 3, left: 4 });
    expect(style).toEqual({ top: 4, right: 8, bottom: 16, left: 32 });
});
test('returns pixel values', function () {
    var style = position_1["default"]({
        top: '1px',
        right: '2px',
        bottom: '3px',
        left: '4px'
    });
    expect(style).toEqual({
        top: '1px',
        right: '2px',
        bottom: '3px',
        left: '4px'
    });
});
