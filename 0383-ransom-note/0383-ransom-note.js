/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    charData = {};
    [...magazine].forEach((char) => {
        charData[char] ? charData[char]++ : charData[char] = 1;
    })
    
    for (let i=0;i<ransomNote.length;i++) {
        const char = ransomNote[i];
        if (charData[char] && charData[char] > 0) {
            charData[char]--;
        }
        else {
            return false;
        }
    }
    return true;
};