/*jslint evil: true, plusplus: true, browser: true */
var email = {
    decode: function (code, increment) {
        "use strict";
        var i = 0, text = "";
        increment = isNaN(increment) ? 0 : parseInt(increment, 10);
        while (i < code.length) {
            text += String.fromCharCode(code[i++] + increment);
        }
        return text.link("mailto:" + text);
    },
    encode: function (text) {
        "use strict";
        var code = [], i;
        for (i = 0; i < text.length; i++) {
            code.push(text.charCodeAt(i));
        }
        return code;
    }
};

/* Examples:

document.write(email.decode([0, 3, 11, 8, 5, 13, -9, 4, -1, -5, -7, 1, -1, -42, -3, 3, -9, -1, 2, -60, -7, 5, 3], 106));

// you don't need to declarate the entire object just to dazzle your e-mail
document.write((function (a) {
    "use strict";
    var b = "", i =0;
    while (i < a.length) {
        b += String.fromCharCode(a[i++] + 106);
    }
    return b.link("mailto:" + b);
})([0, 3, 11, 8, 5, 13, -9, 4, -1, -5, -7, 1, -1, -42, -3, 3, -9, -1, 2, -60, -7, 5, 3]));

// .. or..

document.write((function(x,y){"use strict";var i=0,z="";while(i<x.length) z+=String.fromCharCode(x[i++]+y);return z.link("mailto:"+z);})([0, 3, 11, 8, 5, 13, -9, 4, -1, -5, -7, 1, -1, -42, -3, 3, -9, -1, 2, -60, -7, 5, 3], 106));
*/
