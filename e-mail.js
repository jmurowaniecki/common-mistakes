/*jslint evil: true, plusplus: true, browser: true */
// This is just an idea to obfuscate your e-mail using js
document.write((function (i, a) {
    "use strict";
    var b = "";
    while (i < a.length) {
        b += String.fromCharCode(a[i++] + 106);
    }
    return b.link("mailto:" + b);
})(0, [0, 3, 11, 8, 5, 13, -9, 4, -1, -5, -7, 1, -1, -42, -3, 3, -9, -1, 2, -60, -7, 5, 3]));