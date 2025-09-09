const supermarketItems = [
  // Fruit category (objects -> properties:value)
  {
    name: "Apple",
    category: "Fruit",
    quantity: 10,
    price: 0.5
  },
  {
    name: "Banana",
    category: "Fruit",
    quantity: 15,
    price: 0.3
  },
  {
    name: "Orange",
    category: "Fruit",
    quantity: 12,
    price: 0.6
  },
  // Dairy category
  {
    name: "Milk",
    category: "Dairy",
    quantity: 5,
    price: 1.2
  },
  {
    name: "Cheddar Cheese",
    category: "Dairy",
    quantity: 4,
    price: 3.8
  },
  {
    name: "Yogurt",
    category: "Dairy",
    quantity: 8,
    price: 0.9
  },
  // Bakery category
  {
    name: "Bread",
    category: "Bakery",
    quantity: 3,
    price: 2.5
  },
  {
    name: "Croissant",
    category: "Bakery",
    quantity: 7,
    price: 1.5
  },
  {
    name: "Bagel",
    category: "Bakery",
    quantity: 6,
    price: 1.0
  },
  // Vegetable category
  {
    name: "Broccoli",
    category: "Vegetable",
    quantity: 7,
    price: 1.3
  },
  {
    name: "Carrot",
    category: "Vegetable",
    quantity: 9,
    price: 0.8
  },
  {
    name: "Spinach",
    category: "Vegetable",
    quantity: 5,
    price: 1.5
  }
];

const cart = [
  {
    name: "Apple",
    quantity: 2
  },
  {
    name: "Spinach",
    quantity: 3
  },
  {
    name: "Croissant",
    quantity: 4
  }
]

// Get unique categories from supermarket items
let categories = [];
//for loop to loop through the supermarket items in the array
for(let item of supermarketItems){
    //item is the object
    // use const: within each loop im not gonna change the var current_category
    // use let: when local scope or function scope/variable
    // use var: when you want global scope/variable
    const currentCategory = item['category'];
    //check if the current category is inside the category array
    if (!categories.includes(currentCategory)){
        categories.push(currentCategory);
    }
    console.log(categories);
}

// Get total price of items in cart
function getPrice(itemName){
    //Loop through supermarket items array to find the item
    for(let item of supermarketItems){
        //Return the price
        if(item["name"] == itemName){
            console.log("Found " + item["name"] + " with price $" + item["price"]);
            return item["price"];
        }
    }
    return 0;
}

let grandTotal = 0;
for(let itemCart of cart){
    // item from cart is the object
    const itemPrice = getPrice(itemCart);
    const totalItemPrice = itemPrice * itemCart["quantity"];
    grandTotal += totalItemPrice;
}
console.log(grandTotal);

