/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let searchLevel = 0;
    let sum = 0;
    let count = 0;
    const result = [];
    
    const searchQ = [[root, 0]];
    while (searchQ.length > 0) {
        const [currentNode, level] = searchQ.shift();
        
        if (level !== searchLevel) {
            result.push(sum / count);
            searchLevel++;
            count = 0;
            sum = 0;
        }
        count++;
        sum += currentNode.val;
        
        if (currentNode.left !== null) searchQ.push([currentNode.left, level + 1]);
        if (currentNode.right !== null) searchQ.push([currentNode.right, level + 1]);
    }
    result.push(sum / count);
    
    return result;
};