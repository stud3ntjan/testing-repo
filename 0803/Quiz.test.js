const { isRightSolutionForQuestion } = require("./Quiz");

describe("isRightSolutionForQuestion function", () => {
  // richtige Antwort
  test("sollte true zurückgeben, wenn Antwort richtig", () => {
    expect(
      isRightSolutionForQuestion("frage_1", "Weil er immer kalt gelötet ist.")
    ).toBe(true);
  });

  // flasche Antwort
  test("sollte false zurückgeben, wenn Antwort falsch", () => {
    expect(isRightSolutionForQuestion("frage_1", "Falsche Antwort")).toBe(
      false
    );
  });

  // kein key vorhanden
  test("sollte einen ReferenceError zeigen,  wenn kein key vorhanden", () => {
    expect(() => isRightSolutionForQuestion("frage_6", "Some answer")).toThrow(
      ReferenceError
    );
  });

  // kein string vorhanden
  test("sollte einen TypeError zeigen, wenn Antwort kein string ist", () => {
    expect(() => isRightSolutionForQuestion("frage_1", 123)).toThrow(TypeError);
  });
});
