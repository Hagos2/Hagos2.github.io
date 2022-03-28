"use strict";
/*module.exports = {
  ucFirst,
  getMaxSubSum,
  truncate,
  checkSpam,
  extractCurrencyValue,
  camelize,
}; 
/**
 * 
 * @param {String} str is the string 
 * @returns{String}return string 
 */
function ucFirst(str) {
  return str.charAt(0).toUpperCase() + "" + str.slice(1);
}
/**
 * 
 * @param {string} str  is the string
 * @returns{String} return string
 */
function checkSpam(str) {
  const text = str.toLowerCase();
  return text.includes("viagra") || text.includes("xxx");
}
/**
 * 
 * @param {String} str  is the string
 * @param {number} maxlength  the maximum length
 * @returns {String}return new string
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) return str.slice(0, maxlength - 1) + "…";
  return str;
}
/**
 * 
 * @param {number} currency is the amount 
 * @returns{number} return the number of currency
 */
function extractCurrencyValue(currency) {
  return Number(currency.slice(1));
}
/**
 * 
 * @param {array} arr of numbers
 * @returns{number} the total of the maximal subarray
 */
function getMaxSubSum(arr) {
  let max = 0;
  let subSum = 0;

  for (let item of arr) {
    // for each item of arr
    subSum += item; 
    max = Math.max(max, subSum); 
    if (subSum < 0) subSum = 0; 
  }

  return max;
}
/**
 * 
 * @param {String} str is the  string
 * @returns{String} return
 */
function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}