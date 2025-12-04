const leftRotateArrayByOne = (arr) => {
    const firstNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = firstNumber;

    return arr;
}

const arr = [1, 2, 3, 4, 5];

console.log("the left rotated array by one :", leftRotateArrayByOne(arr))