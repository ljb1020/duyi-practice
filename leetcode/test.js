/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

let matrix = [[1,3]];
let target = 3;

var searchMatrix = function (matrix, target) {
    if(matrix.length === 0) return false;
    if(matrix.length === 1 && matrix[0][0] === target) return true;
    let row = matrix.length;
    let col = matrix[0].length;
    let len = row * col;
    let left = 1;
    let right = len;
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        let x = Math.ceil(mid / col) - 1;
        let y = mid % col - 1;
        // if(x < 0 || x > row - 1 || y < 0 || y > col - 1) return false;

        let num = matrix[x][y];
        if(num === target){
            return true;
        }else if(num > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return false;
};

searchMatrix(matrix,target);