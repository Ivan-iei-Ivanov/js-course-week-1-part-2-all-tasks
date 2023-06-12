const serialNumber      = prompt("Моля, въведете серийния номер на вашата карта: ");
const digitsCollection  = serialNumber.length;
var citizenType         = "";

const isCitizenVIP = (serialNumber % 2) == 0;
if (isCitizenVIP = (serialNumber % 2) == 0){
    citizenType = "VIP"
} 
else{
    citizenType = "няма специални правомощия"
}

const getNextToLastDigit    = parseInt((serialNumber % 100) / 10); 
if (isCitizenTaxEvading = getNextToLastDigit > 3){
    console.log("Браво моето момче");
}
else {
    console.log("Будала");
}
if (citizenType = VIP && isCitizenTaxEvading <= 3){
    citizenType = "SUPER VIP"
    
} else if (isPastryAskedFor && citizenType === "SUPER VIP"){
    console.log("Не може")
}
else {
    console.log("Ами, то и без това няма")
}
        
    
