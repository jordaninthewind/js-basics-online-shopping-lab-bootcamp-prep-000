var cart = [];

function getCart() {
 return cart;
}

function setCart(new_cart) {
  cart = new_cart;
}

function addToCart(itemName) {
 // Generate Random number
 var itemPrice = Math.floor(Math.random() * 100);
 var newItem = {[itemName]: itemPrice};
 // Push Item & Number to Cart as Object
  cart.unshift(newItem);
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');

  } else {
    var returnString = "";
    for (var i = 0; i < cart.length; i++) {
      var keyName = Object.keys(cart[i]);
      var value = cart[i][keyName];
      var itemString = `${keyName} at $${value},`;
        if (i === cart.length - 1) {
          returnString = returnString + ' and ';
        } else if (i === cart.length) {
          itemString = itemString - ',';
        }
        returnString = returnString + itemString;
    }
  }
  console.log(`In your cart, you have ${returnString}.`)
}

  // Two Item Prints 'In your cart, you have ${} and ${}.'
  // Three or More Items Prints ...

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
