/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positives = [];
    const negatives = [];
    const result = [];
    nums.forEach((num) => {
        if (num > 0) {
            positives.push(num);
        }
        else {
            negatives.push(num);
        }
    })
    
    let postIndex = 0;
    let negaIndex = 0;
    while (result.length !== nums.length) {
        if (result.length % 2 === 0) {
            result.push(positives[postIndex]);
            postIndex++;
        }
        else {
            result.push(negatives[negaIndex]);
            negaIndex++;
        }
    }
    return result;
};