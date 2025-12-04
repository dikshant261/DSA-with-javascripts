const findSecondLargestAndSmallest = (arr) => {
    // Remove duplicates
    const uniqueArr = [...new Set(arr)];

    // If less than 2 unique values, return -1
    if (uniqueArr.length < 2) {
        return [-1, -1];
    }

    // Sort ascending
    uniqueArr.sort((a, b) => a - b);

    // 2nd smallest → index 1
    // 2nd largest → second last element
    return [uniqueArr[1], uniqueArr[uniqueArr.length - 2]];
}

const sortedArrOne = [1, 2, 4, 7, 7, 5];

console.log(
    "the second smallest and second largest number in array is: ",
    findSecondLargestAndSmallest(sortedArrOne)
);
