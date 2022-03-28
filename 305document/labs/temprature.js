function convertFahrenheit(fahrenheitTemp) {
    return (fahrenheitTemp - 32) * (5 / 9);
  }
  console.log("expect 0: ", convertFahrenheit(32).toFixed(0));
  console.log("expect -17.7778: ", convertFahrenheit(0).toFixed(4));
  console.log("expect 100: ", convertFahrenheit(212).toFixed(0));
  console.log("expect 37.7778: ", convertFahrenheit(100).toFixed(4));
  