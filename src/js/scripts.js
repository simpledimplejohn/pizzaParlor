export default class Pizza {
  constructor(size, topping, price) {
    this.size = size;
    this.topping = topping;
    this.price = 0
  }
  pizzaPrice () {
    if (this.topping === 1) {
      this.price += (5 + size);
    } else if (this.topping === 2) {
      this.price += (6 + size);
    } else if (this.topping === 3) {
      this.price += (4 + size);
    } else {
      this.price += (3 + size);
    }
  }
}
