function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество"; }
const quantity = Number(quantityText);
  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число"; }

  if (quantity <= 0 || !Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество";
}
const totalAmount = unitAmount * quantity + extraAmount;
return "Итого: "+ totalAmount;
}
 const catalog = [
    {
position: 1,
name: "Рюкзак",
specs: "30 литров 1 комплект",
description: "Для вещей и короткого маршрута"
    },
    {

position: 2,
name: "Коврик",
specs: "180 см 1 комплект",
description: "Для остановки и отдыха на природе"
    },
    {

position: 3,
name: "Фонарь",
specs: "Три режима 1 комплект",
    description: "Свет для вечерней прогулки"
    }
];
 const selectedName = "Рюкзак";
 const quantityText = "2";
 const unitValue = 300;
 const extraValue = 70;
 let foundCount = 0;
 console.log("Записей:", catalog.length);
 for (const item of catalog) {
console.log(item.position +
item.name);

console.log("Характеристика:", item.specs);
console.log("Описание:", item.description);

if (item.name === selectedName) {

foundCount = foundCount + 1;
console.log("Выбрано для расчёта:", item.name);
const message = getResult(quantityText, unitValue, extraValue);

console.log(message);
console.log("Единица расчёта: усл. руб.");
  }
}


 console.log("Найдено записей:", foundCount);
 if (foundCount === 0) {

console.log("Запись не найдена:" + selectedName);
}
 if (foundCount > 1) {
console.log("Проверьте повторяющиеся названия");
}
console.table(catalog);
console.log(catalog.length);
const names = catalog.map(item => item.name);
console.log(names);
const longNames = catalog.filter(item => item.name.length > 5 );
console.log(longNames.length);
const SelectedName = "Коврик";
const found = catalog.find(item => item.name === selectedName);
console.log(found);
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

console.log(filterByText(catalog, "").length);
console.log(filterByText(catalog, "рик"));
console.log(filterByText(catalog, "  РИК  ").length);
console.log(filterByText(catalog, "Вито"));
const status = document.querySelector("#status");
status.textContent = "Записей в каталоге: " + catalog.length;
const first = catalog[0].name;
status.textContent = first + " — " + catalog.length + " записей";

const namesList = document.querySelector("#names");

function renderNames() {
  namesList.replaceChildren();
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}
const showButton = document.querySelector("#show-names");
showButton.addEventListener("click", renderNames);
showButton.addEventListener("click", function () {
  status.textContent = "Список показан";
});
document.getElementById('gi').textContent = "Виталик";
