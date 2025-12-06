const findMissingNumber = (arr) => {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return arr.length;
}

const arr = [3, 0, 1];

console.log("missing number is : ", findMissingNumber(arr));