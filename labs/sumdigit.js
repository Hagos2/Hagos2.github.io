function sumDigits(number) {
    let sum = 0;
    while(number!=0){
        sum+= number%10;
        number = parseInt(number/10);
    }
    return sum;
}

function multDigits(number) {
    let product = 1;
    while(number!=0){
        product*= number%10;
        number = parseInt(number/10);
    }
   return product;
}

console.log("expect 10 ,24: ", sumDigits(1234), multDigits(1234));
console.log("expect 3,0: ", sumDigits(102), multDigits(102));
console.log("expect 8,8: ", sumDigits(8), multDigits(8));