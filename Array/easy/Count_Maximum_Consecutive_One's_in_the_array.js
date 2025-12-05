const maxConsicutiveArray = (arr) => {
    const result = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 1) {
            result.push(count);
            count = 0;
        }
        else {
            count++;
        }
    }
    result.push(count);
    return Math.max(...result)
}

const arr = [1, 1, 0, 1, 1, 1];

console.log("maximum consecutive 1's in an array : ", maxConsicutiveArray(arr));