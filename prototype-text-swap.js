String.prototype.swap = function swap_text(surrogates) {
    "use strict";
    var n, text = this;
    for (n in surrogates) {
        if (surrogates.hasOwnProperty(n)) {
            text = text.replace(new RegExp('{' + n + '}', 'g'), surrogates[n]);
        }
    }
    return text;
};
