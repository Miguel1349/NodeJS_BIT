// Oddish vs Evenish
const oddishOrEvenish = number => {
    let sum = 0;
    let numberToString = number + "";
    for(let i = 0; i < numberToString.length; i++){
        sum += parseInt(numberToString.charAt(i));
    }
    if(sum % 2 === 0) {
        return "Evenish";
    }
    return "Oddish";
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
