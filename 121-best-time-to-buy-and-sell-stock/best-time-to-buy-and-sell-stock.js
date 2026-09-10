
function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        const currentProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
    }

    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); 