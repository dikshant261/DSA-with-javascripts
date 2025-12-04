//brut force
// const findLargestElement = (arr) => {
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);


//     return arr[arr.length - 1];
// }

// const array = [10, 5, 14, 4, 2];

// console.log("Largest element in the array is : ", findLargestElement(array));


//<----------------------------->


//optimal approach

const findLargestElement = (arr) => {
    let maxNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (maxNumber < arr[i]) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}
const array = [10, 5, 14, 4, 2];

console.log("Largest element in the array is : ", findLargestElement(array));
