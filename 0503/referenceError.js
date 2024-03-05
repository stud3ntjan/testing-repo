// Folgender Code wirft einen ReferenceError
try {
  meineLieblingsFunktion();
} catch (error) {
  console.log("Schade, ein Fehler ist aufgetreten:", error.message);
} finally {
  console.log("Klasse! Läuft doch junge!");
}
