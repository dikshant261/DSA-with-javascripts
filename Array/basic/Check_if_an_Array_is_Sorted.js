//optimal approach
const isArraySorted = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}


const sortedArrOne = [1, 2, 3, 4, 5];
const sortedArrTwo = [5, 4, 6, 7, 8];

console.log("Is Array ", sortedArrOne + " sorted ? ", isArraySorted(sortedArrOne));

console.log("Is Array ", sortedArrTwo + " sorted ? ", isArraySorted(sortedArrTwo));