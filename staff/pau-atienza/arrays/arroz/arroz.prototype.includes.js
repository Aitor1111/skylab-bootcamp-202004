'use strict'

Arroz.prototype.includes = function (element, index = 0) {

    if (index >= this.length) {
        return false
    } else if (-index >= this.length) {
        index = 0;
    } else if (index < 0) {
        index = this.length - 1 + index;
    } else {
        index = index;
    };

    for (index; index < this.length; index++) {
        if (this[index] === element) {
            return true;
        };
    };
    return false;
};