const products=[
{name:"Classic Basic Top",price:8500,category:"Basic Tops"},
{name:"Red Sparkle Bow Girls’ Party Dress",price:24500,image:"172181fa-4710-492a-9c9c-4f99b06286a5.jpeg",description:"Elegant red girls’ party dress with puff sleeves, a large bow detail, and sparkling tulle skirt. Perfect for birthdays, parties, celebrations, and special occasions.",category:"Girls’ Dresses",},
{name:"Premium Crop Top",price:9000,category:"Crop Tops"},
{name:"Baggy Jeans",price:22000},
{name:"Round Neck Tee",price:10000},
{name:"Fashion Slippers",price:12000},
{name:"Statement Bag",price:15000},
{name:"Bomb Short",price:11000}
];
let cart=[];
const naira=n=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);
document.getElementById("products").innerHTML=products.map((p,i)=>`<article class="product"><div class="product-img">${p.image ? '<img src="' + p.image + '" alt="' + p.name + '">' : 'PRODUCT PHOTO'}</div><h3>${p.name}</h3><small class="category">${p.category || ''}</small><p class="description">${p.description || ''}</p><div class="price">${naira(p.price)}</div><small>Delivery fee separate</small><button class="add" onclick="addToCart(${i})">ADD TO CART</button></article>`).join("");
function addToCart(i){cart.push(products[i]);renderCart();toggleCart(true)}
function renderCart(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.name}</span><b>${naira(p.price)}</b></div>`).join(""):'<p class="empty">Your cart is empty.</p>';document.getElementById("cartTotal").textContent=naira(cart.reduce((s,p)=>s+p.price,0))}
function toggleCart(force){const open=force===true||!document.getElementById("cart").classList.contains("open");document.getElementById("cart").classList.toggle("open",open);document.getElementById("overlay").classList.toggle("show",open)}
function checkout(){if(!cart.length)return alert("Your cart is empty.");const text="Hello King Holi Fashion House, I would like to order:%0A"+cart.map(p=>`• ${p.name} — ${naira(p.price)}`).join("%0A")+`%0A%0ATotal: ${naira(cart.reduce((s,p)=>s+p.price,0))}`;window.open("https://wa.me/2347075198152?text="+text,"_blank")}
