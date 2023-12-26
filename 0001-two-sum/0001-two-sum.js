/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {};
    for (let i=0;i<nums.length;i++) {
        const current = nums[i];
        
        if (dict[current] !== undefined) {
            return [dict[current], i];
        }
        dict[target - current] = i;
    }
};