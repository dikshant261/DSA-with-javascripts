const moveAllZeroToEnd = (nums) => {
    const tempArr = new Array(nums.length).fill(0);
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            tempArr[index] = nums[i];
            index++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = tempArr[i];
    }
    return nums;
}
const arr = [1, 0, 2, 3, 0, 4, 0, 1];

console.log("all zeros move to end of array : ", moveAllZeroToEnd(arr));