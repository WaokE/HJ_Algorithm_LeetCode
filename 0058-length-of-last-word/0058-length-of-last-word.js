/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let result = s.trim().replace(/ /g, ' ').split(' ');
    return result[result.length - 1].length;
};