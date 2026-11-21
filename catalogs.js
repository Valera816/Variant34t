function getResult(quantityText, unitValue, extraValue) {
  if (quantityText.trim() === "") {
    return "Ошибка: укажите количество";
  }
  
  const quantity = Number(quantityText);
  if (!Number.isFinite(quantity)) {
    return "Ошибка: введите число"
  }

  if (quantity <= 0) {
    return "Ошибка: нужно положительное целое количество"
  }

  if (!Number.isInteger(quantity)) {
    return "Ошибка: нужно положительное целое количество"
  }
  const totalTime = unitValue * quantity + extraValue;
  return "Итого: " + totalTime + " минут"
}

const catalog = [
    {
      position: 1,
      name: "Волейбол",
      specs: "Зал Б · 90 минут",
      description: "Командная игра и работа с мячом"
    },
    {
      position: 2,
      name: "Растяжка",
      specs: "Студия · 45 минут",
      description: "Спокойные упражнения на гибкость"
    },
    {
      position: 3,
      name: "Бадминтон",
      specs: "Зал А · 60 минут",
      description: "Парные упражнения и точность движений"
    }
];

const SelectedName = "Волейбол";
const unitValue = 90;
let quantityText = "3";
const extraValue = 10;

console.log("Записей: " + catalog.length);
let foundCount = 0;
for (const item of catalog) {
    console.log(item.position + ". " + item.name);
    console.log("Характеристика: " + item.specs);
    console.log("Описание: " + item.description);

    if (item.name === SelectedName) {
        foundCount = foundCount + 1;
        console.log("Выбрано для расчета: " + item.name);
        const message = getResult(quantityText, unitValue, extraValue);
        console.log(message);
    }
}

console.log("Найдено записей: " + foundCount);

if (foundCount === 0) {
    console.log("Запись не найдена: " + selectedName);
}

if (foundCount > 1) {
    console.log("Проверьте повторяющиеся названия");
}

console.table(catalog);
console.log(catalog.length);

const names = catalog.map(item => item.name);
console.log(names);

const longNames = catalog.filter(item => item.name.length > 8);
console.log(longNames.length);

const selectedName = "Волейбол";
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
console.log(filterByText(catalog, "бол"));
console.log(filterByText(catalog, "  БОЛ  ").length);
console.log(filterByText(catalog, "йога"));