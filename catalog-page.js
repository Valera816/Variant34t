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
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

function renderCatalog(items) {
  catalogList.replaceChildren();
  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";
    const title = document.createElement("h2");
    title.textContent = item.name;
    const specs = document.createElement("p");
    specs.textContent = item.specs;
    const description = document.createElement("p");
    description.textContent = item.description;
    card.append(title, specs, description);
    catalogList.append(card);

    }
    if (items.length === 0) {
         statusText.textContent = "Ничего не найдено";
    } else {
        statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
    }
}
renderCatalog(catalog)
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found);
});