console.log("scripts works!");


export default class Pizza {
  constructor(size, topping) {
    this.size = size;
    this.topping = topping;
    this.price = 0;
  }
  pizzaPrice () {
    if (this.topping === 1) {
      this.price += (5 + this.size);
    } else if (this.topping === 2) {
      this.price += (6 + this.size);
    } else if (this.topping === 3) {
      this.price += (4 + this.size);
    } else {
      this.price += (3 + this.size);
    }
  }
}

