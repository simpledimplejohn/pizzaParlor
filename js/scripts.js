function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0
}

Pizza.prototype.pizzaPrice = function() {
  let size = this.size
  let topping = this.topping

  if (size === 1) {
    console.log("1 works")
    this.price += 10;
  } else if (size === 2) {
    console.log("2 works")
    this.price += 20;
  } else if (size === 3) {
    console.log("3 works")
    this.price += 30
  } 
  if (topping === 1) {
    console.log("topping works")
    this.price *= 1.8;
  } else if (topping === 2) {
    console.log("toppings 2 works")
    this.price *= 1.2;
  }
  return this.price
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