const applePrice = 15.678;
const blueberryPrice = 123.965;
const cherryPrice = 90.2345;

const maxPrice = Math.max(applePrice, blueberryPrice, cherryPrice);
console.log(maxPrice);

const minPrice = Math.min(applePrice, blueberryPrice, cherryPrice);
console.log(minPrice);

let sum = applePrice + blueberryPrice + cherryPrice;
console.log(sum);

let sumFloor = Math.floor(applePrice) + Math.floor(blueberryPrice) + Math.floor(cherryPrice);
let sumFloorRound = Math.round(sumFloor/100) * 100;
console.log(sumFloorRound);

let isSumEven = sumFloor % 2 == 0;
console.log(isSumEven);

let change = 500 - sum;
console.log(change);

let average = (sum/3).toFixed(2);
console.log(average);

let randomDiscount = Math.random();
let sumWithDiscount = sum - (sum * randomDiscount).toFixed(2);
console.log(sumWithDiscount);

let profit = sum/2 - (sum * randomDiscount).toFixed(2);
console.log(profit);

let allCalculations = `Максимальна ціна: ${maxPrice} \n
Мінімальна ціна: ${minPrice} \n
Вартість усіх товарів: ${sum} \n
Сума цілих частин вартості кожного товару: ${sumFloor} \n
Сума вартості товарів округлена до сотень: ${sumFloorRound} \n
Сума всіх товарів парна: ${isSumEven} \n
Решта при оплаті товарів,якщо клієнт дає 500грн: ${change} \n
Середнє значення цін(округлене до 2го знаку): ${average} \n
Сума до сплати разом зі знижкою: ${sumWithDiscount} \n
Чистий прибуток: ${profit}`;

document.write(allCalculations);