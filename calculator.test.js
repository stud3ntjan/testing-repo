const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});

// -- Aufgabe 1 --
// subtract
test("subtract positive numbers", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("subtract negative numbers", () => {
  expect(calculator.subtract(-5, -3)).toBe(-2);
});

test("subtract from zero", () => {
  expect(calculator.subtract(0, 5)).toBe(-5);
});

// multiply
test("multiply positive numbers", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("multiply with negative numbers", () => {
  expect(calculator.multiply(-5, 3)).toBe(-15);
});

test("multiply by zero", () => {
  expect(calculator.multiply(5, 0)).toBe(0);
});
// -- Aufgabe 1 Ende --
