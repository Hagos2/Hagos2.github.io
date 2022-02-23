/*3. Make a defining table and program to print out the balance of a savings account that compounds interest monthly. Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound
Answer defining table is:
input:
initial amount ,annual interest rate, number of years to compound
process:
compute compound interest
output:
balance of saving account
*/
const initialAmount= Number(input("enter the initial amount"));
const annualInterestRate=input("enter the annual interest rate");
const years=input("enter number of years");
const  saving= initialAmount * (1 + annualInterestRate / 100 / 12) ** (years * 12);
console.log(saving);