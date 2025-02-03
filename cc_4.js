// Task #1
let purchaseAmount = 120;
let discount = 0.1; // 10% discount

if (purchaseAmount > 100) {
    purchaseAmount -= purchaseAmount * discount;
}

console.log(`Final amount after discount: $${purchaseAmount}`);

