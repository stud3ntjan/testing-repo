const cart = [];

/*
{
    name: "Aüfel",
    value: 5
}
*/

function addCartItem(name, value) {
  cart.push({ name, value });
}

// function deleteCartItem() {}

function getTotalValue() {
  let result = 0;
  for (item in cart) {
    result += items.value;
  }
  return result;
}

addCartItem("Apfel", 5);
console.log(cart[0]);

module.exports.cart = cart;
module.exports.addCartItem = addCartItem;
module.exports.getTotalValue = getTotalValue;
