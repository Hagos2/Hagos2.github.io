function calcDownpayment(cost) {
    let downPayment;
    if (cost < 0) return;
    if (cost < 50000) {
      downPayment = 0.05 * cost;
    } else if (cost < 100000) {
      downPayment = 2500 + 0.1 * (cost - 50000);
    } else if (cost < 200000) {
      downPayment = 7500 + 0.15 * (cost - 100000);
    } else if (cost >= 200000) {
      downPayment = 5000 + 0.1 * (cost - 200000);
    }
    return downPayment;
  }
  console.log("expect 2000: ", calcDownpayment(40000));
  console.log("expect 2500: ", calcDownpayment(50000));
  console.log("expect 7500: ", calcDownpayment(100000));
  console.log("expect 5000: ", calcDownpayment(200000));