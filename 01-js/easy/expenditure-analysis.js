/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
// array of objects
// 1. we need to find all unique categories
// 2. add all the price of each category
// 3. make object of each category
// 4. return array of these objects
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];
			// { category: 'Food', totalSpent: 30 },
			// { category: 'Clothing', totalSpent: 40 },
			// { category: 'Electronics', totalSpent: 30 },
function calculateTotalSpentByCategory(transactions) {
 
  const categoryTotal = {}
  
  transactions.forEach(transaction => {
    const { category, price } = transaction
    
    if (!categoryTotal[category]) {
      categoryTotal[category] 
    }
  });


}
calculateTotalSpentByCategory(transactions)
module.exports = calculateTotalSpentByCategory;
