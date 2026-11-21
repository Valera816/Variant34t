const itemName = "Рюкзак";
const unitPrice = 300;
let quantityText = "2";
const deliveryPrice = 70;
const isTraining = true;

const quantity = Number(quantityText);
const totalPrice = unitPrice * quantity + deliveryPrice;

console.log("Название:", itemName);
console.log("учебныe данныe:", isTraining);
console.log( "Количество комплектов —", quantity);
console.log("Общая стоимость:", totalPrice, "усл. руб.");
console.log("Тип строки количества: string")
console.log("Тип количества после преобразования: number")
console.log("Тип итога: number")
console.log("Тип учебного признака: boolean")

