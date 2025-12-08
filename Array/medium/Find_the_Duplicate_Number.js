const findDuplicate = function (nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) return num; // repeated number
        set.add(num);
    }

    return null; // no repeat found
};

const arr = [1, 3, 4, 2, 2];

console.log("the duplicate number is : ", findDuplicate(arr));