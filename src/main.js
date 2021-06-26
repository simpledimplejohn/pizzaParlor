import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Pizza from './js/scripts.js';

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