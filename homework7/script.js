const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};

const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921
};

const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114
};

//Рахує податки

function getMyTaxes(salary) {
  return +(salary * this.tax).toFixed(0);
}

console.log(`Податок у вибраній країні:`, getMyTaxes.call(latvia, 82925));

//Середній податок

function getMiddleTaxes() {
  return +(this.tax * this.middleSalary).toFixed(0);
}

console.log(`Середній податок у вибраній країні:`, getMiddleTaxes.call(ukraine));

//Всі податки 

function getTotalTaxes() {
  return +(this.tax * this.middleSalary * this.vacancies).toFixed(0);
}

console.log(`Усі податки у вибраній країні:`, getTotalTaxes.call(ukraine));

//Об'єкт з профітом

function getMySalary() {
  const randomSalary = {};
  const min = 1500;
  const max = 2000;

  setInterval(() => {
    let salary = Math.floor(Math.random() * (max - min + 1) + min);
    randomSalary.salary = salary;
    const taxes = +(salary * this.tax).toFixed(0);
    randomSalary.taxes = taxes;
    const profit = salary - taxes;
    randomSalary.profit = profit;
    console.log(`Рандомний об'єкт з зп, податками і профітом:`, randomSalary);
  }, 10000);

}

console.log(getMySalary.call(ukraine));