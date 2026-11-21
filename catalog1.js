
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
  if (quantity <= 0) {
    return "Ошибка: нужно положительное целое число";
  }
  if (!Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое число";
  }
  const totalAmount = unitAmount * quantity + extraAmount;
  return "Итого: " + totalAmount;
}



const result = document.querySelector("#result");
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
const quantityText = document.querySelector("#quantity").value;
const select = document.querySelector("#item");
const itemName = select.options[select.selectedIndex].text;
const message = getResult(quantityText, unitValue, extraValue)

console.log(message);
result.textContent = message;
result.textContent = itemName + ". " + message;
});