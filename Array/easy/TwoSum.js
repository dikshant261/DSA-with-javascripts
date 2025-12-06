

const twoSum = (arr, target) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}
const arr = [2, 7, 11, 15];

const target = 9;
console.log("Indices of the two numbers that add up to target: ", twoSum(arr, target));