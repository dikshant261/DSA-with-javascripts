const rotateImage = (image) => {
    let row = image.length;
    let col = image[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = i + 1; j < col; j++) {
            temp = image[i][j];
            image[i][j] = image[j][i];
            image[j][i] = temp;
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col / 2; j++) {
            temp = image[i][j];
            image[i][j] = image[i][col - j - 1];
            image[i][col - j - 1] = temp;
        }
    }
    return image;
}
const image = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log("transposed image: ", rotateImage(image));