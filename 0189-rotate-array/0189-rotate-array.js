/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const popped = nums.splice(nums.length - (k % nums.length));
    Array.prototype.unshift.apply(nums, popped);
};