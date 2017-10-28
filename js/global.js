//update cart number on window refresh
$(document).ready(function() {
  
  //grab current cart from localStorage
  var cartArray = JSON.parse(localStorage.getItem("allOrders"));
  
  //hide cart number if empty
  if (cartArray === null || cartArray.length === 0) {
    $(".cart-circle").hide();
    $(".cart-number").hide();
    
  //update and show number if cart has items  
  } else {
    
    //set number to current length of cart
    var cartSize = cartArray.length;
    $(".cart-number").text(cartSize);
    
    //make circle visible
    $(".cart-circle").show();
    $(".cart-number").show();
    
  }
  
});