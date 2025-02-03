// Task 1: Customer Discounts (If Statements)
let purchaseAmount = 120;
let discount = 0.1; // 10% discount

if (purchaseAmount > 100) {
    purchaseAmount -= purchaseAmount * discount;
}

console.log(`Final amount after discount: $${purchaseAmount}`);

// Task 2 Sales Report (For Loop)
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);

// Task 3: Inventory Depletion (While Loop)

let stock = 10;

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--;
}

//Task 4: Customer Survey (Do...While Loop)

let responses = 0;

do {
    console.log(`Response #${responses + 1}`);
    responses++;
} while (responses < 3);

// Task 5: Employee Information (For...In Loop)

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}

// Task 6: Product Listings (For...Of Loop)
let products = ["Laptop", "Mouse", "Keyboard"];

for (let product of products) {
    console.log(`Product: ${product}`);
}

// Task 7: Order Processing (forEach Method)
let orders = [101, 102, 103];

orders.forEach(order => {
    console.log(`Order ID: ${order}`);
});

// Task 8: Tax Calculation (Function Declaration)
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let amount = 200;
let taxRate = 0.1; // 10%

console.log(`Tax amount: $${calculateTax(amount, taxRate)}`);

// Task 9: Discount Application (Function Expression)
const applyDiscount = function(price, discountPercentage) {
    return price - (price * discountPercentage);
};

let price = 100;
let discountPercentage = 0.2; // 20%

console.log(`Discounted price: $${applyDiscount(price, discountPercentage)}`);

// Task 10: Loyalty Points (Arrow Function)
const calculatePoints = amount => amount / 10;

let purchaseAmount = 150;
console.log(`Loyalty points earned: ${calculatePoints(purchaseAmount)}`);
