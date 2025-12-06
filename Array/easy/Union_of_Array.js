const findUninoOfTwoArrays = (array1, array2) => {
    //merge two arrays and create a set to remove duplicates
    const unionSet = new Set([...array1, ...array2]);

    //convert the set back to an array and return
    return Array.from(unionSet);
}


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

console.log("Union of two arrays is : ", findUninoOfTwoArrays(arr1, arr2));