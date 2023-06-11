const serialNumber = prompt("Моля, въведете серийния номер на вашата карта: ");
const digits = serialNumber.length;

if (digits > 6) {
  console.log("Има за нас, има и за вас");
} else if (digits === 6) {
  console.log("Радваме се, че нормални хора вече гласуват");
} else if (digits > 2) {
  console.log("Хайде по-бързо и да те няма");
} else {
  console.log("Невалиден сериен номер");
}
