/*
5. Cost of House Down Payment
Make a defining table and then write a program that calculates down payment for a home loan based on following rules. Your program should prompt for the cost and write the down payment amount to the console.
  Cost of House
$0 to less than 50K $50K to less than 100K $100K to less than 200K $200K and above
Down Payment
5% of the cost
$1000 + 10% of (cost - $50K) $2000 + 15% of (cost - $100K) $5000 + 10% of (cost - $200K)

//defining table

input: cost of house
process: calculate DownPayment
outPut:DownPayment
*/
const cost= input("enter the home loan");
let downPayment;

    if (cost < 50000) {
        downPayment = 0.05 * cost;
      } else if (cost < 100000) {
        downPayment = 1000 + 0.1 * (cost - 50000);
      } else if (cost < 200000) {
        downPayment = 2000 + 0.15 * (cost - 100000);
      } else if (cost >= 200000) {
        downPayment = 5000 + 0.1 * (cost - 200000);
      }
      console.log(downPayment);
