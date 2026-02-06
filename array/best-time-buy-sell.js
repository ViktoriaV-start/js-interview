'use strict';

// Вам дан массив цен, где цены[i] — это цена данной акции на i-й день.
// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день
// в будущем для продажи этой акции. Верните максимальную прибыль, которую вы можете получить от этой сделки.
// Если вы не можете получить прибыль, верните 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    if (prices.length < 2) return 0;
  
  let minPrice = prices[0]; // минимальная цена для покупки
  let maxProfit = 0;        // максимальная прибыль
  
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    
    // Если текущая цена меньше минимальной - обновляем минимум
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
    
    // Считаем потенциальную прибыль и обновляем максимум
    const potentialProfit = currentPrice - minPrice;
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
  }
  
  return maxProfit;
};

const prices = [2,1,2,1,0,1,2];


console.log(maxProfit(prices));

// Логика решения:

// Идем по массиву цен слева направо
// Запоминаем  минимальную цену, которую видели до текущего момента
// Для каждой цены вычисляем потенциальную прибыль (текущая цена - минимальная)
// Обновляем максимальную прибыль, если нашли лучший вариант


// Еще вариант

const maxProfitVariant = function(prices) {
  let leftIdx = 0; // указатель на покупку (минимальная цена)
  let rightIdx = 1; // указатель на продажу (текущая цена)

  let maxProfit = 0;

  while (rightIdx < prices.length) {

    if (prices[leftIdx] < prices[rightIdx]) {
      const profit = prices[rightIdx] - prices[leftIdx];
      const maxProfit = Math.max(maxProfit, profit);
    } else {
      leftIdx = rightIdx; // Нашли новую минимальную цену
    }


    rightIdx++;
  }

  return maxProfit;

};

console.log(maxProfitVariant(prices));


