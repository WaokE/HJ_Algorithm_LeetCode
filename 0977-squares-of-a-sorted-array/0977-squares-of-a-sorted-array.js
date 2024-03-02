/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const result = nums.map((num) => num**2);
    result.sort((a, b) => a - b);
    return result;
};