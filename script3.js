const serialNumber = prompt("Моля, въведете серийния номер на вашата карта: ");
const digitsCollection = serialNumber.length;
var citizenType = "";

const isCitizenVIP = (serialNumber % 2) == 0;
if (isCitizenVIP = (serialNumber % 2) == 0){
    citizenType = "VIP"
} 
else{
    citizenType = "няма специални правомощия"
}
