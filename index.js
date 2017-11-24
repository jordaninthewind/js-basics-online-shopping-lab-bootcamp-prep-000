var cart = [];

function getCart() {
 return cart;
}

function setCart() {
  return cart;
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
  // Empty Cart Return 'Your shopping cart is empty.'
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var returnString = "";
    for (var i = 0; i < cart.length - 1; i++) {
      var keyName = Object.keys(cart[i]);
      var value = cart[i][keyName];
      var itemString = `${keyName} at $${value},`;
        if (i === length - 2) {
          returnString = returnString + ' and ';
        } if (i === length - 1) {
          itemString = itemString - ',';
        }
        returnString = returnString + itemString;
    }
    console.log(`In your cart, you have ${returnString}.`)
  }
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
