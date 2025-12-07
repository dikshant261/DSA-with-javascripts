const searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
}


const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const target = 100;

console.log("Is target present in matrix? ", searchMatrix(matrix, target));