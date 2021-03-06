# _Pizza Parlor_ :pizza:

_The First Byte Pizza Parlor website_

## Team Members 

* _**John Blalock**_


## Technologies Used :floppy_disk:

* _HTML_
* _CSS_
* _VS code_
* _Bootstrap_
* _JavaScript_
* _JQuery 3.6.0_

## Description :page_with_curl:

_A Pizza Parlor website designed to calculate the price of a pizza based on form submissions.  Used to demonstrate objects, constructors, and branching in JavaScript._

## Specs :pushpin:

Describe: `Pizza()`

Test: "It should check that Pizza class is present."
Code: `let newPizza = new Pizza();`
Expected: `newPizza = {}`

Test: "It should return an object containing the size and toppings of the pizza."
Code: `let newPizza = new Pizza(10,1);`
Expected: `newPizza = {`
`  size: 10;`
`  topping: 1;`
`  price: 0;`
`}`

Describe: `Pizza.prototype.pizzaPrice()`

Test: 'It should return a price of 5 + size if topping === pepperoni.
Code: `newPizza.price`
Expect: `15`

Test: 'It should return a price of 6 + size if topping === sausage.
Code: `newPizza.price`
Expect: `16`

Test: 'It should return a price of 4 + size if topping === olive.
Code: `newPizza.price`
Expect: `14`

Test: 'It should return a price of 3 + size if topping === mushroom.
Code: `newPizza.price`
Expect: `13`

## Setup/Installation Requirements :triangular_ruler:

* Clone github repo `git clone https://github.com/simpledimplejohn/pizzaParlor`:
* Navigate to directory `pizza-parlor`
* Open `index.html` in your browser.
* Choose your toppings and order your pizza!


## Known Bugs and Future Changes :bug:

* _Non known at this time_
* _Be able to choose more than one topping at once_

## License :clipboard:

_[MIT](https://opensource.org/licenses/MIT)_
&copy; 2021 _John Blalock_

## Contact Information :mailbox:

_John Blalock: simpledimplejohn@gmail.com_
