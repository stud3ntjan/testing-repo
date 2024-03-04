const shoppingCart = require("./shoppingCart");

test("Teste die Function addCartItem", () => {
  shoppingCart.addCartItem("Apfel", 5);

  expect(shoppingCart.cart.length).toBe(1);
});

test.only("Teste die Function addCartItem nochmal", () => {
  shoppingCart.addCartItem("Birne", 7);

  expect(shoppingCart.cart.length).toBe(0);
});

test("Der GEsamtwert des Cart ist bei 0 Items gleich 0", () => {
  expect(shoppingCart.getTotalValue()).toBe(0);
});
