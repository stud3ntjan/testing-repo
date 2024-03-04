function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

console.log(divide(10, 2));
console.log(divide(10, 3));

// Im Browser: export default sum
module.exports.sum = sum;
module.exports.divide = divide;
