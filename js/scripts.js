function Pizza(quantity, toppings, sizeOfPizza){
  this.quantity = quantity;
  this.toppings = toppings;
  this.sizeOfPizza = sizeOfPizza;

}

Pizza.prototype.price = function(){
  var standardPrice = 8;

  if (this.toppings === "Meat"){
    standardPrice += 5;
  } else if (this.toppings === "Cheese") {
    standardPrice += 2;
  } else {
    standardPrice += 3;
  }

  if (this.sizeOfPizza === "Small"){
    standardPrice -= 2;
  } else if (this.sizeOfPizza === "Medium") {
    standardPrice += 1;
  } else {
    standardPrice += 5;
  }

  return standardPrice * this.quantity;
}


$(document).ready(function(){
  $('#pizza-details').submit(function(event){
    event.preventDefault();
    var selectedPizzaQuantity = $('#selected-quantity').val();
    var selectedToppings = $('#selected-toppings :selected').text();
    var selectedSize = $('#selected-size :selected').text();
    var pizzaOrder = new Pizza(selectedPizzaQuantity, selectedToppings, selectedSize);
    var pizzaPrice = pizzaOrder.price();
    $('#show-price').text("The Price of the Pizza is: $" + pizzaPrice);

  });
});
