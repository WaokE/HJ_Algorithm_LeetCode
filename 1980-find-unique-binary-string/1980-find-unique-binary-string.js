var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    const possibleBinarys = [];
    
    const addDataStack = [[1], [0]];
    while (addDataStack.length > 0) {
        const currentBinary = addDataStack.pop();
        if (currentBinary.length === n) possibleBinarys.push(currentBinary.join(''));
        else {
            addDataStack.push([...currentBinary, 0]);
            addDataStack.push([...currentBinary, 1]);
        }
    }
    
    const numsData = {};
    nums.forEach((num) => {
        numsData[num] ? numsData[num]++ : numsData[num] = 1;
    })
    
    for (let i=0;i<possibleBinarys.length;i++) {
        if (!numsData[possibleBinarys[i]]) return possibleBinarys[i];
    }
};