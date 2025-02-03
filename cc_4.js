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

