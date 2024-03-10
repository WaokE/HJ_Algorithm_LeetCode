/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const dict = {};
    const result = [];
    
    nums1.forEach((num) => {
        dict[num] ? null : dict[num] = true; 
    })
    
    nums2.forEach((num) => {
        if (dict[num]) {
            dict[num] = false;
            result.push(num);
        }
    })
    
    return result;
}; 