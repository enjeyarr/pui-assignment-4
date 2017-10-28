/** DOCUMENT LOAD  **/
$(document).ready(function() {
  
  //initially hides additional flavor options on page load
  $("#additional-flavor-container").hide();
  
  //add click event to .package-div to toggle package selection
  $(".package-div").click(function() {
    if (!$(this).hasClass("package-selected")) {
      
      //if selecting Single, hide container - Else show flavor options
      if ($(this).hasClass("single")) {
        $("#additional-flavor-container").hide();
        $("#big-caramel").attr("src", "../images/Caramal_Pecan_L.jpg");
        $("#price-text").html("$ 3.00");
        
      } else if ($(this).hasClass("half-dozen")) {
        $("#additional-flavor-container").show();
        $("#big-caramel").attr("src", "../images/Caramal_Pecan_6.jpg");
        $("#price-text").html("$ 12.00");
        
      } else {
        $("#additional-flavor-container").show();
        $("#big-caramel").attr("src", "../images/Caramal_Pecan_12.jpg");
        $("#price-text").html("$ 20.00");
      }
      
      //removes .package-selected from other buttons and adds it to current one
      $(".package-selected").removeClass("package-selected");
      $(this).addClass("package-selected");
      
    }
  });
  
  //click button event to add order to cart
  $("#add-cart-button").click(function() {
    
    //create new object for the current order
    var order = new Object();
    
    //grab order info and assign it to order properties
    order.source = $("#big-caramel").attr("src");
    order.price = $("#price-text").text();
    order.flavor1 = "Caramel Pecan";
    order.package = $(".package-selected p").text();
    order.flavor2 = $("#other-flavor-1").val();
    order.flavor3 = $("#other-flavor-2").val();
    
    //new dummy array 
    var newArray = [];
    
    //parse current cart and store in variable
    var oldArray = JSON.parse(localStorage.getItem("allOrders"));
    
    //if old cart is empty, push current order to the start of the array to prevent length error
    if (oldArray === null) {
      newArray[0] = order;
      
    //if old cart has items, save old cart to new cart and push current order to end
    } else {
      newArray = oldArray;
      newArray[newArray.length] = order;
    }
    
    //push current cart to local storage
    localStorage.setItem("allOrders", JSON.stringify(newArray));
  });
  
});