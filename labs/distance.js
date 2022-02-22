function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  
  console.log("expect 7.07 : ", calcDistance(0, 0, 5, 5));