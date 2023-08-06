let maxProfit = function (prices) {
  let buy = prices[0];
  let maxProfit = 0;
  let currentPrice;
  for (let i = 1; i < prices.length; i++) {
    currentPrice = prices[i];
    buy = Math.min(buy, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - buy);
  }
  return maxProfit;
};
const prices = [7, 6, 5, 4, 3, 2, 1];
let maxProfitOutput = maxProfit(prices);
console.log(maxProfitOutput);

/*

Time complexity: O(n)
Space complexity: O(1)

*/
