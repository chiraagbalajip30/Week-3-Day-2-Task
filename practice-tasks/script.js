// 1. Create an array of 10 products (name, price, category)

const products = [
  { name: "Running Shoes", price: 1500, category: "Shoes" },
  { name: "Sandals", price: 700, category: "Shoes" },
  { name: "Backpack", price: 1200, category: "Accessories" },
  { name: "Wallet", price: 500, category: "Accessories" },
  { name: "Watch", price: 2500, category: "Accessories" },
  { name: "T-Shirt", price: 800, category: "Clothing" },
  { name: "Jeans", price: 1800, category: "Clothing" },
  { name: "Cap", price: 300, category: "Accessories" },
  { name: "Sneakers", price: 2200, category: "Shoes" },
  { name: "Socks", price: 150, category: "Clothing" },
];
console.log(products);

//2. Filter products under ₹1000

const under1000 = products.filter((product) => product.price < 1000);
console.log("Products under ₹1000:", under1000);

// 3. Map products → return only their names

const productNames = products.map((product) => product.name);
console.log("Product Names:", productNames);

// 4. Calculate total price using reduce()

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price of all products:", totalPrice);

// 5. Create a products table using JavaScript DOM rendering

const table = document.createElement("table");
products.forEach((p) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${p.name}</td>
    <td>₹${p.price}</td>
    <td>${p.category}</td>
  `;

  table.appendChild(row);
});

document.body.appendChild(table);
