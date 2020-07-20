let firstNumber = '';
let secondNumber = '';

while (Number.isInteger(firstNumber) !== true) {
  if (Number.isNaN(firstNumber) === true) {
    firstNumber = +prompt('Введіть число:');
  } else {
    firstNumber = +prompt('Ви ввели не ціле число, спробуйте ще раз:');
  }
}
console.log(firstNumber);

while (Number.isInteger(secondNumber) !== true) {
  if (Number.isNaN(secondNumber) === true) {
    fsecondNumber = +prompt('Введіть ще одне число:');
  } else {
    secondNumber = +prompt('Ви ввели не ціле число, спробуйте ще раз:');
  }
}
console.log(secondNumber);

const shouldSkipEven = confirm('Чи хочете пропустити парні числа при складанні чисел?');

const maxNumber = Math.max(firstNumber, secondNumber);
const minNumber = Math.min(firstNumber, secondNumber);

let sum = 0;
let i = 0;

for (i = minNumber; i <= maxNumber; i++) {
  if (shouldSkipEven === true && i % 2 == 0) {
    continue;
  }
  sum += i;
}

console.log(sum);