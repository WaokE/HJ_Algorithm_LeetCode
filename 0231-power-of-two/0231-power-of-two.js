/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let numb = 1;
    while (numb <= n) {
        if (numb === n) return true;
        numb *= 2;
    }
    return false;
};