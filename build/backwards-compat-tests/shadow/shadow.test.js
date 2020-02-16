"use strict";
exports.__esModule = true;
var shadow_1 = require("../../parsers/shadow");
test('returns shadow styles', function () {
    var style = shadow_1["default"]({
        theme: {
            shadows: {
                small: '0 1px 4px rgba(0, 0, 0, .125)'
            }
        },
        textShadow: '0 -1px rgba(255, 255, 255, .25)',
        boxShadow: 'small'
    });
    expect(style).toEqual({
        textShadow: '0 -1px rgba(255, 255, 255, .25)',
        boxShadow: '0 1px 4px rgba(0, 0, 0, .125)'
    });
});
