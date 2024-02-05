var firstUniqChar = function(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            map[s[i]] = i;
        } else {
            map[s[i]] = -1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== -1) {
            return map[s[i]];
        }
    }
    return -1;  
};