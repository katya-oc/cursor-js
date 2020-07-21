let firstNumber = '';
let secondNumber = '';

function getIntegerNumber(x) {
  while (Number.isInteger(x) !== true) {
    if (x === '') {
      x = +prompt('Введіть число:');
    } else if (Number.isNaN(x) === true) {
      x = +prompt('Ви ввели не ціле число, спробуйте ще раз:');
    } else {
      x = +prompt('Ви ввели не ціле число, спробуйте ще раз:');
    }
  }
  return x;
}

firstNumber = getIntegerNumber(firstNumber);
console.log(firstNumber);

secondNumber = getIntegerNumber(secondNumber);
console.log(secondNumber);

const shouldSkipEven = confirm('Чи хочете пропустити парні числа при складанні чисел?');

const maxNumber = Math.max(firstNumber, secondNumber);
console.log(maxNumber);
const minNumber = Math.min(firstNumber, secondNumber);
console.log(minNumber);

let sum = 0;
let i = 0;

for (i = minNumber; i <= maxNumber; i++) {
  if (shouldSkipEven === true && i % 2 == 0) {
    continue;
  }
  sum += i;
}

console.log(sum);

document.write(`Перше число: ${firstNumber} <br> 
Друге число: ${secondNumber} <br>
Пропустити парні числа: ${shouldSkipEven} <br>
Сума: ${sum}`);