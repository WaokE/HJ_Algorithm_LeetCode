/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let j=0;j<words.length;j++) {
        const word = words[j];
        let result = true;
        for(let i=0;i<word.length/2;i++) {
            const first = word[i];
            const second = word[word.length -i -1];
            if (first !== second) {
                result = false;
                break;
            }
        }
        if (result) return word;
    }
    return "";
};