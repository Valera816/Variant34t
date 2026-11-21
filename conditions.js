console.log("Расчёт моего приложения");

function getResult(quantityText, unitAmount, extraAmount) {
  return "Расчёт пока не собран";
}
const itemName = "Снаряжение рядом";

let quantityText = "0";
const unitValue = 300;
const extraValue = 70;
const isTraining = true;
function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }
  const quantity = Number(quantityText);
  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число";
  }
  if (quantity <=0) {
    return "Ошибка: нужно положительное целое число";
  }
  if (!Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое число";
  }
  const totalAmount = unitAmount * quantity + extraAmount;
  return "Итого: " + totalAmount;
}
console.log("Название:", itemName);
console.log("Учебные данные:", isTraining);
console.log("Общая стоимость; единица: условные рубли");
const resultMessage = getResult(quantityText, unitValue, extraValue);

console.log("Мой вариант:", resultMessage); 

console.log("Одна единица:", getResult("0", unitValue, extraValue)); 
console.log("Три единицы:", getResult("0", unitValue, extraValue)); 
console.log("Пустое поле:", getResult("", unitValue, extraValue));
console.log("Только пробелы:", getResult("", unitValue, extraValue));
console.log("Слово:", getResult("два", unitValue, extraValue));
console.log("Бесконечность:", getResult("Infinity", unitValue, extraValue));
console.log("Ноль:", getResult("0", unitValue, extraValue));
console.log("Отрицательное:", getResult("-1", unitValue, extraValue));
console.log("Дробное:", getResult("1.5", unitValue, extraValue));

console.log("Пробелы вокруг числа:", getResult(" 2 ", unitValue, extraValue));

console.log("Цена больше на 10:", getResult("2", unitValue + 10, extraValue));
console.log("Доставка больше на 10:", getResult("2", unitValue, extraValue + 10));





