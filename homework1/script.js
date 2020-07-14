const applePrice = 15.678;
const blueberryPrice = 123.965;
const cherryPrice = 90.2345;

const maxPrice = Math.max(applePrice, blueberryPrice, cherryPrice);
console.log(maxPrice);

const minPrice = Math.min(applePrice, blueberryPrice, cherryPrice);
console.log(minPrice);

const sum = applePrice + blueberryPrice + cherryPrice;
console.log(sum);

const sumFloor = Math.floor(applePrice) + Math.floor(blueberryPrice) + Math.floor(cherryPrice);
const sumFloorRound = Math.round(sumFloor/100) * 100;
console.log(sumFloorRound);

const isSumEven = Math.floor(sum) % 2 === 0;
console.log(isSumEven);

const change = 500 - sum;
console.log(change);

const average = (sum/3).toFixed(2);
console.log(+average);

const randomDiscount = Math.random();
const sumWithDiscount = sum - (sum * randomDiscount).toFixed(2);
console.log(+sumWithDiscount.toFixed(2));

const profit = sum/2 - (sum * randomDiscount).toFixed(2);
console.log(profit);

document.write(`Максимальна ціна: ${maxPrice} <br>
Мінімальна ціна: ${minPrice} <br>
Вартість усіх товарів: ${sum} <br>
Сума цілих частин вартості кожного товару: ${sumFloor} <br>
Сума вартості товарів округлена до сотень: ${sumFloorRound} <br>
Сума всіх товарів парна: ${isSumEven} <br>
Решта при оплаті товарів, якщо клієнт дає 500грн: ${change} <br>
Середнє значення цін(округлене до 2го знаку): ${average} <br>
Сума до сплати разом зі знижкою: ${+sumWithDiscount.toFixed(2)} <br>
Чистий прибуток: ${+profit.toFixed(2)}`);

