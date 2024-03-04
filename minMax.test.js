// -- Aufgabe 2.2 --

const minMax = require("./minMax");

// Tests für min
test("min of two positive numbers", () => {
  expect(minMax.min(5, 3)).toBe(3);
});

test("min of two negative numbers", () => {
  expect(minMax.min(-5, -3)).toBe(-5);
});

test("min with one positive and one negative number", () => {
  expect(minMax.min(5, -3)).toBe(-3);
});

// Tests für max
test("max of two positive numbers", () => {
  expect(minMax.max(5, 3)).toBe(5);
});

test("max of two negative numbers", () => {
  expect(minMax.max(-5, -3)).toBe(-3);
});

test("max with one positive and one negative number", () => {
  expect(minMax.max(5, -3)).toBe(5);
});
