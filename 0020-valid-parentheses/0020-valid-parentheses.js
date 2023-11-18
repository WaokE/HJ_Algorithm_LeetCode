var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ')' && (stack.length === 0 || stack.pop() !== '(')) return false;
        else if (char === '}' && (stack.length === 0 || stack.pop() !== '{')) return false;
        else if (char === ']' && (stack.length === 0 || stack.pop() !== '[')) return false;
        else if (char === '(' || char === '{' || char === '[') stack.push(char);
    }
    return stack.length === 0;
};
