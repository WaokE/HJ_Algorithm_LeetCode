/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer1 = 0;
    for (let i=1;i<nums.length;i++) {
        const pointer2 = i;
        if (nums[pointer1] === nums[pointer2]) {
            continue;
        }
        else {
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }
    return pointer1 + 1;
};