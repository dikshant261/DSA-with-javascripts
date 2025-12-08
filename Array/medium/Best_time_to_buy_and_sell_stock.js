const maxProfit = function (prices) {
    if (prices.length <= 1) return 0;
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}

const arr = [7, 6, 4, 3, 1];

console.log("the maximum profit is : ", maxProfit(arr));