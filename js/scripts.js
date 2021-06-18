function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0
}

Pizza.protototype.pizzaPrice = function() {
  let size = this.size
  let topping = this.topping
  if (size === 1) {
    console.log("1 works")

  } else if (size === 2) {
    console.log("2 works")
  } else {
    console.log("3 works")
  }
}

$(document).ready(function() {
  $("#movie-form").submit(function(event) {
    event.preventDefault();
    const sizeInput = parseInt($("#size").val());
    const toppingInput = parseInt($("#size").val());

    let newPizza = new Pizza(sizeInput, toppingInput);

    newPizza.pizzaPrice();
    console.log(newPizza.price)


  })
})