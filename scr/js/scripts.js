function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0
}

Pizza.prototype.pizzaPrice = function() {
  let size = this.size
  let topping = this.topping
  console.log(topping)
  if (topping === 1) {
    this.price += (5 + size);
  } else if (topping === 2) {
    this.price += (6 + size);
  } else if (topping === 3) {
    this.price += (4 + size);
  } else {
    this.price += (3 + size);
  }
}


$(document).ready(function() {

  $("#order-form").submit(function(event) {
    event.preventDefault();
    console.log("document.ready works!")
    const sizeInput = parseInt($("#size").val());
    const toppingInput = parseInt($("#toppings").val());

    let newPizza = new Pizza(sizeInput, toppingInput);
    newPizza.pizzaPrice();
    console.log(newPizza.price)
    $("#result").text(newPizza.price)
  })
})