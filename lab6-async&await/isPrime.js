const isPrime = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) {
                    reject({ prime: false });
                }
            }
            resolve({ prime: num > 1 });
        }, 500);
    });
};
async function isPrimeAsync(num) {
    let result = await isPrime(7);
    console.log(result);
}
console.log('start');
isPrimeAsync(7);
console.log('end');