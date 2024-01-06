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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let maximumDepth = 0;
    const searchQ = [[root, 1]];
    while (searchQ.length > 0) {
        const [currentNode, depth] = searchQ.shift();
        if (depth > maximumDepth) maximumDepth = depth; 
        if (currentNode.left) searchQ.push([currentNode.left, depth + 1]);
        if (currentNode.right) searchQ.push([currentNode.right, depth + 1]);
    }
    
    return maximumDepth;
};