import Pizza from './../src/js/scripts.js';

describe('Pizza', () => {
  test('should check that Pizza class is present', () => {
    const newPizza = new Pizza()
  });

  test('should create a pizza with size, topping, and price properties', () => {
    const newPizza = new Pizza(10,1);
    expect(newPizza).toEqual({
      size: 10,
      topping: 1,
      price: 0,
    })
  });

  test('should return a pice of 5 + size if topping === pepperoni', () => {
    const newPizza = new Pizza(10, 1);
    newPizza.pizzaPrice();
    expect(newPizza.price).toEqual(15)
  })

  test('should return a pice of 6 + size if topping === sausage', () => {
    const newPizza = new Pizza(10, 2);
    newPizza.pizzaPrice();
    expect(newPizza.price).toEqual(16)
  })

  test('should return a pice of 4 + size if topping === olive', () => {
    const newPizza = new Pizza(10, 3);
    newPizza.pizzaPrice();
    expect(newPizza.price).toEqual(14)
  })

  test('should return a pice of 3 + size if topping === mushroom', () => {
    const newPizza = new Pizza(10, 4);
    newPizza.pizzaPrice();
    expect(newPizza.price).toEqual(13)
  })

});