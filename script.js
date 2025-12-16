const products = [
  { name: "Running Shoes", price: 1500, category: "Shoes" },
  { name: "Sandals", price: 700, category: "Shoes" },
  { name: "Backpack", price: 1200, category: "Accessories" },
  { name: "Wallet", price: 500, category: "Accessories" },
  { name: "Cap", price: 300, category: "Accessories" },
  { name: "T-Shirt", price: 800, category: "Clothing" },
];

const productList = document.getElementById("productList");

const renderProducts = (items) => {
  productList.innerHTML = "";

  items.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <h2>${p.name}</h2>
            <p>₹${p.price}</p>
            <p>${p.category}</p>
        `;

    productList.appendChild(card);
  });
};

// Initial render
renderProducts(products);

// Filters
document.getElementById("under999").onclick = () => renderProducts(products.filter(p => p.price < 999));

document.getElementById("shoes").onclick = () => renderProducts(products.filter(p => p.category === "Shoes"));

document.querySelector("#accessories").onclick = () =>
  renderProducts(products.filter(p => p.category === "Accessories"));


// Sort
document.getElementById("sort").onclick = () => {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
};
