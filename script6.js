const serialNumber      = prompt("Моля въведете номера на вашата персонална идентификационна карта: ");
const digitsCollection  = serialNumber.length;
var citizenType         = "";
var politicalPartyID    = 0;
var politicalPartyName  = "";
var isPastryAskedFor    = true

if (digitsCollection > 6) {
    citizenType = "RICH";
  } else if (digitsCollection === 6) {
    citizenType = "NORMAL";
  } else if (digitsCollection > 2) {
    citizenType = "POOR";
  }
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
    
} 
else if (isPastryAskedFor && citizenType === "SUPER VIP"){
    console.log("Не може")
}
else {
    console.log("Ами, то и без това няма")
}

if (politicalPartyID = 1){
    politicalPartyName = "Партия за прогресивен канибализъм";
}
else if (politicalPartyID = 27){
    politicalPartyName = "Замундска вегетарианска партия";
}
else if (politicalPartyID = 666){
    politicalPartyName = "Синдикат на вуду-трактористите";
}
else if (politicalPartyID = 999){
    politicalPartyName = "Партия на труда, мотиката и наковалнята";
}

console.log(`Вие си поръчахте да ви управлява ${politicalPartyName}`);

if (citizenType === "NORMAL" && isPastryAskedFor && politicalPartyID === 27 ){ // to add condition
    console.log("Животът е жесток и дължите данък от един банан при напускане на тъмната стаичка.")
}    
