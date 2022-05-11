function isPrime(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
                if (num % i === 0) {
                    reject(`{ prime: false}`);
                }
            }
            resolve(`{ prime: true}`);
        }, 500);
    });
  };
  console.log('start');
  isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  console.log('end');

//2
const isPrime=num=>new Promise((resolve,reject)=>{
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0)reject(`{ prime: false}`);
    resolve(`{ prime: true}`);
},500);
console.log('start');
  isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
  console.log('end');