const rotatematrix = (matrix) => {
    let row = matrix.length;
    let col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = i + 1; j < col; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col / 2; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[i][col - j - 1];
            matrix[i][col - j - 1] = temp;
        }
    }
    return matrix;
}
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log("transposed matrix: ", rotatematrix(matrix));