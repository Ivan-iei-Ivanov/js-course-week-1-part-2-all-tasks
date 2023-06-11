const serialNumber = prompt("Моля, въведете серийния номер на вашата карта: ");
const digitsCollection = serialNumber.length;
var citizenType = "";

if (digitsCollection > 6) {
  citizenType = "RICH";
} else if (digitsCollection === 6) {
  citizenType = "NORMAL";
} else if (digitsCollection > 2) {
  citizenType = "POOR";
}
