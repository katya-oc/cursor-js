//Ім'я з великої літери

function formatName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

//Найбільша цифра з числа

function getMaxDigit(numb) {
  let array = Math.abs(numb).toString().split('');
  return Math.max(...array);
}

//Cтупіть числа

function getValueToPower(number, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= number;
  }
  return result;
}

//Податок

function showSalaryAfterTax(salary, tax1, tax2) {
  let taxSum = tax1 + tax2;
  let pureSalary = salary - (salary * (taxSum / 100));
  return pureSalary;
}

//Рандомне ціле

function getRandomInteger(numb1, numb2) {
  return Math.floor(Math.random() * (numb2 - numb1)) + numb1;
}

//Повторювання букви

function countLetter(word, letter) {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase().includes(letter.toLowerCase())) counter++;
  }
  return counter;
}

//Конвертація валюти

function convertCurrency(value) {
  let result = 0;
  if (value.includes('$')) {
    result = (parseInt(value) * 27.8).toFixed(2) + '' + 'грн';
  } else if (value.toLowerCase().includes('uah')) {
    result = (parseInt(value) * 0.036).toFixed(2) + '' + '$';
  } else {
    result = 'Invalid value';
  }
  return result;
}

//Видалити букви з речення

function deleteLetters(letter, str) {
  for (let i = 0; i < str.length; i++) {
    str = str.replace(letter, '');
  }
  return str;
}

//Паліндром

function isPalyndrom(str) {
  str = str.replace(/ /g, '');
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}


//Рандомний пароль

function randomPassword(passlng = 8) {
  let pass = '';
  for (let i = 0; i < passlng; i++) {
    pass += Math.floor(Math.random() * 9);
  }
  return pass;
}

//Видалити повторювані літери

function deleteDuplicateLetter(str) {
  str.toLowerCase();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      result += str[i];
    }
  }
  return result;
}

document.write(`Функція, що форматує ім'я (з великої літери): ${formatName('vAlEriYa')} <br>
Найбільша цифра з числа: ${getMaxDigit(468556)} <br>
Ступінь числа: ${getValueToPower(5, 5)} <br>
Заробітна плата після податків: ${showSalaryAfterTax(18000, 18, 1.5)} <br>
Випадкове ціле число з діапазону: ${getRandomInteger(15, 45)} <br>
Скільки повторюється якась літера: ${countLetter('green', 'e')} <br>
Долари в гривні і навпаки: ${convertCurrency('50644Uah')} <br>
Випадковий пароль: ${randomPassword()} <br>
Видаляє букву з речення: ${deleteLetters('s', 'sassy')} <br>
Чи слово/речення падіндром: ${isPalyndrom('Я несу гусеня')} <br>
Видаляє повторювані букви з речення: ${deleteDuplicateLetter('Have a nice day')}`);