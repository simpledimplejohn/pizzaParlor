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
});