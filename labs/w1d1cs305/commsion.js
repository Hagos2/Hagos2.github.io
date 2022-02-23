/*1,  Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500
*/
let commission;
let sales;
if(isSalaried){
    if(sales<300){
        commission=0;
    }
    else if(sales>300&& sales< 500){
        commission=0.01*sales;
    }
    else if(sales>500){
        commission=0.02*sales;
    }
    else if(!isSalaried){
        if (sales > 300 && sales < 500) {
            commission = sales * 0.02;
          } else if (sales >= 500) {
            commission = sales * 0.3;
          }
    }
}