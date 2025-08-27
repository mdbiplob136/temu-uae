let products = [
  {title:"Mini Camera", price:20, temu_price:10, image:"assets/img/camera.jpg"},
  {title:"Wireless Earbuds", price:30, temu_price:15, image:"assets/img/earbuds.jpg"},
  {title:"Smart Watch", price:50, temu_price:25, image:"assets/img/watch.jpg"}
];
let cart = [];
function displayProducts() {
  let container = document.getElementById('product-list');
  if (!container) return;
  products.forEach((p, index)=>{
    let div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<img src="${p.image}" alt="${p.title}">
                     <h3>${p.title}</h3>
                     <p>Price: ${p.price} AED</p>
                     <button onclick="addToCart(${index})">Buy</button>`;
    container.appendChild(div);
  });
}
function addToCart(i) {
  cart.push(products[i]);
  alert(products[i].title + " added to cart!");
  localStorage.setItem('cart', JSON.stringify(cart));
}
function displayCart() {
  let container = document.getElementById('cart-items');
  if (!container) return;
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;
  container.innerHTML = '';
  cart.forEach((p)=>{
    let div = document.createElement('div');
    div.innerHTML = `<p>${p.title} - ${p.price} AED</p>`;
    container.appendChild(div);
    total += p.price;
  });
  container.innerHTML += `<h3>Total: ${total} AED</h3>`;
}
function checkout() {
  alert("Checkout complete! (Demo only)");
  localStorage.removeItem('cart');
}
window.onload = ()=>{
  displayProducts();
  displayCart();
};