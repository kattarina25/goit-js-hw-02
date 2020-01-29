let input;
const numbers = [];
const fillArray = function(number) {
  if (number !== 0) {
    !Number.isNaN(number)
      ? numbers.push(number)
      : alert("Было введено не число, попробуйте еще раз");
  }
};
const add = function(numbers) {
  if (numbers.length > 0) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return `Общая сумма равна ${total}`;
  }
  return "Данных не обнаружено";
};
const enteredData = () => {
  while (input !== null) {
    input = prompt("Введите число");
    fillArray(Number(input));
  }
};
enteredData();
console.log(add(numbers));
