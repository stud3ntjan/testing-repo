const sum = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});
