module.exports = {
    isVowel,
    computeSalesCommission,
    compoundInterest,
    calcDownpayment,
    convertFahrenheit,
    calcDistance,
  };
  
  function isVowel(char) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function computeSalesCommission(salaried, salesAmount) {
    let commission;
    if (salaried === true) {
      if (salesAmount < 300) {
        commission = 0;
        return Number(Math.round(commission + "e2") + "e-2") || commission;
      } else if (salesAmount <= 500) {
        commission = 0.01 * salesAmount;
        return Number(Math.round(commission + "e2") + "e-2") || commission;
      } else {
        commission = 0.01 * 500 + 0.02 * (salesAmount - 500);
        return Number(Math.round(commission + "e2") + "e-2") || commission;
      }
    } else {
      if (salesAmount < 300) {
        commission = 0;
        return Number(Math.round(commission + "e2") + "e-2") || commission;
      } else if (salesAmount <= 500) {
        commission = 0.02 * salesAmount;
        return Number(Math.round(commission + "e2") + "e-2") || commission;
      } else {
        commission = 0.02 * 500 + 0.03 * (salesAmount - 500);
        return Number(Math.round(commission + "e2") + "e-2") || commission;
      }
    }
  }
  
  function compoundInterest(amount, interestRate, year) {
    let balance = amount * (1 + interestRate / (100 * 12)) ** (year * 12);
    return Number(Math.round(balance + "e2") + "e-2");
  }
  
  function calcDownpayment(cost) {
    let downpayment;
    if (cost >= 200000) {
      downpayment = 5000 + 0.1 * (cost - 200000);
      return Number(Math.round(downpayment + "e2") + "e-2") || downpayment;
    } else if (cost >= 100000) {
      downpayment = 7500 + 0.15 * (cost - 100000);
      return Number(Math.round(downpayment + "e2") + "e-2") || downpayment;
    } else if (cost >= 50000) {
      downpayment = 2500 + 0.1 * (cost - 50000);
      return Number(Math.round(downpayment + "e2") + "e-2") || downpayment;
    } else if (cost >= 0) {
      downpayment = 0.05 * cost;
      return Number(Math.round(downpayment + "e2") + "e-2") || downpayment;
    } else {
      console.log("Please enter a postive number and try again.");
    }
  }
  
  function convertFahrenheit(fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9);
    return Number(Math.round(celcius + "e4") + "e-4") || celcius;
  }
  
  function calcDistance(x1, y1, x2, y2) {
    let d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
    return Number(Math.round(d + "e2") + "e-2");
  }
  
