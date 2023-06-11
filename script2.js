const serialNumber = prompt("Моля, въведете серийния номер на вашата карта: ");
const digitsCollection = serialNumber.length;
var citizenType = "";

if (digitsCollection > 6) {
  console.log("Има за нас, има и за вас");
} else if (digitsCollection === 6) {
  console.log("Радваме се, че нормални хора вече гласуват");
} else if (digitsCollection > 2) {
  console.log("Хайде по-бързо и да те няма");
} else {
  console.log("Невалиден сериен номер");
}
