// Folgender Code wirft einen TypeError
try {
  const zahl = 1024;

  zahl.map((item) => {
    console.log(item);
  });
} catch (error) {
  console.log("Schade, ein Fehler ist aufgetreten:", error.message);
} finally {
  console.log("Klasse! Läuft doch junge!");
}
