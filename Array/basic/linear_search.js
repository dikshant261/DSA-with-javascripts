const findNumberAtIndex = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i + 1;
        }
    }
    return "number not present in array";
}

const arr = [2, 4, 9, 10, 55, 23];

let numberFind = 11;

console.log("the number", numberFind + " is at index :", findNumberAtIndex(arr, numberFind))