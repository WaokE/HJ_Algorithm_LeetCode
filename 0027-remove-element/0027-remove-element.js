/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let result = 0;
    const leftNumbers = [];
    while (nums.length > 0) {
        const number = nums.pop();
        if (number !== val) {
            result++;
            leftNumbers.push(number);
        }
    }
    leftNumbers.forEach((numb) => {
        nums.push(numb);
    })
    for (let i=0;i<result;i++) nums.push(1)
    return result;
};