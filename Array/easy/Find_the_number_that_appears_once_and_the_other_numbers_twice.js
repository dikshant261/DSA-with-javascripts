const findSingleNumber = (nums) => {
    let max = Math.max(...nums);
    const countArr = new Array(max + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        countArr[nums[i]]++;
    }
    for (let i = 0; i < nums.length; i++) {
        if (countArr[i] === 1) {
            return i;
        }
    }
    return -1;
}

const arr = [4, 1, 2, 1, 2];

console.log("maximum consecutive 1's in an array : ", findSingleNumber(arr));