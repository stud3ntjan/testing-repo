const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });

  // -- Aufgabe 2 Test Cases --
  // Unter 18 Jahren
  test("Test for age being less than 18", () => {
    expect(isAdult(17)).toBe(false);
  });

  // Über 18 oder genau 18
  test("Test for age being greater than or equal to 18", () => {
    expect(isAdult(20)).toBe(true);
  });

  // Negative Eingabe
  test("Test for age being a negative number", () => {
    expect(() => {
      isAdult(-5);
    }).toThrow(TypeError);
  });

  // String Eingabe
  test("Test for age being a string", () => {
    expect(() => {
      isAdult("abc");
    }).toThrow(TypeError);
  });

  // Objekt Eingabe
  test("Test for age being an object", () => {
    expect(() => {
      isAdult({});
    }).toThrow(TypeError);
  });
});
