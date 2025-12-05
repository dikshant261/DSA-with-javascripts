const rotateArrayRight = (nums, k) => {
    k = k % nums.length; // Fix: handle k > length

    if (k === 0) return; // nothing to rotate

    const tempArr = [];

    
    for (let i = 0; i < nums.length - k; i++) {
        tempArr[i] = nums[i];
    }

    
    for (let j = nums.length - 1; j >= nums.length - k; j--) {
        tempArr.unshift(nums[j]);
    }

    
    return tempArr;
}
const arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Right roted Array : ", rotateArrayRight(arr, k));