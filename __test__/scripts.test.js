import expectationResultFactory from 'jest-jasmine2/build/expectationResultFactory';
import Pizza from './../src/js/scripts.js';

describe('Pizza', () => {
  test('should check that Pizza class is present', () => {
    const newPizza = new Pizza()
  });
});

describe('Pizza', () => {
  test('should create a pizza with size, topping, and price properties', () => {
    const newPizza = new Pizza(10,1)
    expect(newPizza).toEqual({
      size: 10,
      topping: 1,
      price: 0,
    })
  });
});