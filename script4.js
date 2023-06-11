const serialNumber      = prompt("Моля, въведете серийния номер на вашата карта: ");
const digitsCollection  = serialNumber.length;
var citizenType         = "";

const getNextToLastDigit    = parseInt((serialNumber % 100) / 10); 
if (isCitizenTaxEvading = getNextToLastDigit > 3){
    console.log("Браво моето момче");
}
else {
    console.log("Будала");
}
