$(document).ready(function() {
  
  //grab current cart from localStorage
  var cartArray = JSON.parse(localStorage.getItem("allOrders"));
  
  //prevent loading an empty cart
  if ( cartArray !== null) {
      
      //loop through cart and populate page for each item
      for(var i=0; i<cartArray.length; i++) {
        
        //grab the item object values and save them in local variables
        var price = cartArray[i].price;
        var flavor = cartArray[i].flavor1;
        var source = cartArray[i].source;
        //remove first three characters to prevent moving up a folder
        var sourceSliced = source.slice(3);
        var package = cartArray[i].package;
        var flavor2 = cartArray[i].flavor2;
        var flavor3 = cartArray[i].flavor3;

        
        //html template to add to 
        var itemTemplate = $('<div class="cart-item-container"><button class="item-remove" id="' + i + '">Remove</button><img src="' + sourceSliced + '" alt="Caramel Pecan Roll"/><h4>' + flavor + '</h4><p class="package-select"> ' + package + '</p><p class="other-flavor-select">'+ flavor2 +'</p><p class="other-flavor-select">' + flavor3 + '</p><p class="item-price"> ' + price + '</p></div>');
        
       //add the new item html to the cart page
       itemTemplate.appendTo("#cart-wrapper");
  
      }
    
    //add button click events to remove items when click
    $(".item-remove").click(function() {
      
      //clear the item div from the page
      $(this).parent().remove();
      
      //grab the index array stored as an id on the button
      var itemIndex = parseInt($(this).attr("id"));
      
      //remove the item associated with remove button from the current cart
      cartArray.splice(itemIndex, 1);
      
      //push changes in cart to localStorage
      localStorage.setItem("allOrders", JSON.stringify(cartArray));
      
      //refresh the window to reset the cart on the page (in order to reassign the right ID to the remove buttons)
      window.location.reload(true);
    });    
    
  }
  
});