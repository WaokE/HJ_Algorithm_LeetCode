/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const BFS = (startPos) => {
        const [x, y] = startPos;
        const searchQ = [[x, y]];
        
        const nx = [-1, 1, 0 ,0];
        const ny = [0, 0, -1 ,1];
        while (searchQ.length > 0) {
            const [cx, cy] = searchQ.shift();
            if (visited[cx][cy]) continue;
            visited[cx][cy] = true;
            
            for (let i=0;i<4;i++) {
                const nnx = cx + nx[i];
                const nny = cy + ny[i];
                if (nnx >= 0 && nnx < grid.length && nny >=0 && nny < grid[0].length && grid[nnx][nny] === '1') searchQ.push([nnx, nny]);
            }
        }
    }
    
    let result = 0;
    const visited = new Array(grid.length);
    for (let i=0;i<grid.length;i++) {
        visited[i] = new Array(grid[i].length).fill(false);
    }

    for (let i=0;i<grid.length;i++) {
        for (let j=0;j<grid[i].length;j++) {
            if (grid[i][j] === '1' && visited[i][j] === false) {
                BFS([i, j]);
                result++;
            }
        }
    }
    return result;
};