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
