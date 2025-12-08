const rearrangeArray = (nums) => {
    const positive = [];
    const negative = [];
    const result = [];

    for (let num of nums) {
        if (num >= 0) {
            positive.push(num);
        } else {
            negative.push(num);
        }
    }

    for (let i = 0; i < positive.length; i++) {
        result.push(positive[i]);
        result.push(negative[i]);
    }

    return result;
}

const arr = [3, 1, -2, -5, 2, -4];

console.log("rearranged array by sign: ", rearrangeArray(arr));