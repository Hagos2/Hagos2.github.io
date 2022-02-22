function compoundInterest(initialAmount, annualInterestRate, years) {
    return initialAmount * (1 + annualInterestRate / 100 / 12) ** (years * 12);
  }
  console.log("expect 110.47", compoundInterest(100, 10, 1));
  console.log("expect 16470.09", compoundInterest(10000, 5, 10));