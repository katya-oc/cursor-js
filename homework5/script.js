//Масив заданої довжини з рандомними елементами

function getRandomArray(length, min, max) {
  let arr = new Array(length);
  return [...arr].map(() => Math.floor(Math.random() * (max - min + 1) + min));
}

console.log(`Рандомний масив: ${getRandomArray(5, 2, 7)}`);

//Мода всіх аргументів


//Середнє арифметичне всіх заданих чисел

function getAverage(...numbers) {
  const sum = numbers.reduce((sum, number) => {
    if (Number.isInteger(number)) {
      return sum + number;
    } else {
      return sum;
    }
  }, 0);
  return sum / numbers.length;
}

console.log(`Середнє арифметичне: ${getAverage(3, 4, 6.5, 2, 6)}`);

//Медіана (частково піддивилась в інеті, але розібралась чого так)

function getMedian(...numbers) {
  numbers.sort((a, b) => a - b);
  const lowMiddle = Math.floor((numbers.length - 1) / 2);
  const highMiddle = Math.ceil((numbers.length - 1) / 2);
  const median = (numbers[lowMiddle] + numbers[highMiddle]) / 2;
  return median;
}

console.log(`Медіана: ${getMedian(34, 5, 66, 17, 23, 1)}`);

//Фільтрує парні числа

function filterEvenNumbers(...numbers) {
  return numbers.filter(number => (number % 2));
}

console.log(`Фільтрує парні, видає непарні: ${filterEvenNumbers(2, 3, 5, 6, 7, 91, 33)}`);

//Рахує кількість чисел більших за 0

function countPositiveNumbers(...numbers) {
  return numbers.filter(number => number > 0).length;
}

console.log(`Кількість чисел більших за 0: ${countPositiveNumbers(-20, 2, 17, 55, -12, 34, 2)}`);

//Числа що на ціло діляться на 5

function getDividedByFive(...numbers) {
  return numbers.filter(number => !(number % 5));
}

console.log(`Числа, що діляться на 5 на ціло: ${getDividedByFive(50, 43, 20, 5, 33, 4, 11)}`);

//Замінити погані слова

// function replaceBadWords(string) {
//   let arr = string.split(' ');

// }

// console.log(replaceBadWords('what the fuck is going on?'));

//Розбити слово на умовні склади по 3 літери

//Унікальна перестановка букв

// function generateCombinations(word) {

// }

// console.log(generateCombinations('кусь'));