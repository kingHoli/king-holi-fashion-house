const products=[
{name:"Classic Basic Top",price:8500,category:"Basic Tops",description:"A versatile everyday top that pairs easily with jeans, skirts, and shorts. Perfect for casual outings and everyday style."},
{name:"Green Sparkle Bow Girls’ Party Dress",price:24500,image:"a8c93f98-98c1-464e-9598-e86942d5d862.jpeg",description:"Elegant green girls’ party dress with puff sleeves, a large bow detail, and a sparkling tulle skirt. Perfect for birthdays, parties, celebrations, and special occasions.",category:"Girls’ Dresses"},
{name:"Red Sparkle Bow Girls’ Party Dress",price:24500,image:"172181fa-4710-492a-9c9c-4f99b06286a5.jpeg",description:"Beautiful red girls’ party dress with puff sleeves, a large bow detail, and a sparkling tulle skirt. Perfect for birthdays, parties, celebrations, and special occasions.",category:"Girls’ Dresses"},
{name:"Premium Crop Top",price:9000,category:"Crop Tops",description:"A stylish crop top that pairs perfectly with high-waisted jeans, skirts, and shorts. Great for casual outings and trendy everyday looks."},
{name:"Baggy Jeans",price:22000,category:"Baggy Jeans",description:"Relaxed-fit baggy jeans that bring comfort and street-style vibes to your outfit. Easy to pair with T-shirts, crop tops, and sneakers."},
{name:"Round Neck Tee",price:10000,category:"Round Neck Tees",description:"A classic round-neck T-shirt made for effortless everyday style. Easy to pair with jeans, shorts, and sneakers for a clean, casual look."},
{name:"Fashion Slippers",price:12000,category:"Slippers",description:"Comfortable and stylish slippers for everyday wear. Easy to slip on and perfect for casual outings and relaxed days."},
{name:"Statement Bag",price:15000,category:"Bags",description:"A stylish statement bag that adds a fashionable touch to your outfit. Perfect for everyday essentials, casual outings, and special occasions."},
{name:"Bomb Short",price:11000,category:"Shorts",description:"Stylish shorts designed for a relaxed, casual look. Easy to pair with T-shirts and sneakers for everyday wear and outings."},
{name:"Pink Sparkle Bow Girls’ Party Dress",price:24500,image:"7687747d-2cf5-4344-a11a-b0aa1db065bf.jpeg",description:"A beautiful pink girls’ party dress with puff sleeves, a large satin bow, and a sparkling tulle skirt. Perfect for birthdays, parties, and special occasions.",category:"Girls’ Dresses"},
{name:"Rainbow Sparkle Bow Girls’ Party Dress",price:24500,image:"8250fd81-1688-480e-9efc-7c3cbe2749a7.jpeg",description:"A beautiful rainbow girls’ party dress with a colorful, sparkling skirt and an elegant bow detail. Perfect for birthdays, parties, and special occasions.",category:"Girls’ Dresses"},
{name:"Cream Flower Bow Girls’ Party Dress",price:24500,image:"f84c7988-5678-4551-bd29-dbcf33000217.jpeg",description:"An elegant cream girls’ party dress featuring beautiful peach flowers at the waist, a large satin bow at the back, and a sparkling tulle skirt. Perfect for birthdays, parties, and special occasions.",category:"Girls’ Dresses"},
{name:"Blue Flower Bow Girls’ Party Dress",price:24500,image:"3f3f011a-2750-4efb-ba3b-b542017bef43.jpeg",description:"A beautiful light blue girls’ party dress featuring blue flowers at the waist, a large satin bow at the back, and a sparkling tulle skirt. Perfect for birthdays, parties, and special occasions.",category:"Girls’ Dresses"},
{name:"Pink & White Flower Bow Girls’ Party Dress",price:24500,image:"44493cb1-c05d-475f-9e80-c817e0af0616.jpeg",description:"A beautiful pink-and-white girls’ party dress featuring a white satin bodice, a bright pink layered skirt, a cream flower detail, and a large satin bow at the back. Perfect for birthdays, parties, and special occasions.",category:"Girls’ Dresses"},
{name:"White Cat-Eye Sunglasses with Blue Lenses",price:12000,image:"af361590-ad0b-45a1-af29-76eb31e3c349.jpeg",category:"Fashion Accessories",description:"Make a statement with these stylish white cat-eye sunglasses featuring blue lenses. Perfect for casual outings, holidays, and everyday fashion."},
{
  name: "Lavish",
  price: 36000,
  image: "60b76c15-5f61-41f9-88f2-f0f253426a9d.jpeg",
  category: "Women's Dresses",
  description: "Step out in style with Lavish, a beautiful floral halter-neck dress designed to make every occasion special."
}
];
let cart=[];

const naira=n=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(n);
document.getElementById("products").innerHTML=products.map((p,i)=>`<article class="product"><div class="product-img">${p.image ? '<img src="' + p.image + '" alt="' + p.name + '">' : 'PRODUCT PHOTO'}</div><h3>${p.name}</h3><small class="category">${p.category || ''}</small><p class="description">${p.description || ''}</p><div class="price">${naira(p.price)}</div><small>Delivery fee separate</small><button class="add" onclick="addToCart(${i})">ADD TO CART</button></article>`).join("");
function addToCart(i){cart.push(products[i]);renderCart();toggleCart(true)}
function renderCart(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-item"><span>${p.name}</span><b>${naira(p.price)}</b></div>`).join(""):'<p class="empty">Your cart is empty.</p>';document.getElementById("cartTotal").textContent=naira(cart.reduce((s,p)=>s+p.price,0))}
function toggleCart(force){const open=force===true||!document.getElementById("cart").classList.contains("open");document.getElementById("cart").classList.toggle("open",open);document.getElementById("overlay").classList.toggle("show",open)}
function checkout(){
  if(!cart.length)return alert("Your cart is empty.");

  const total = cart.reduce((s,p)=>s+p.price,0);
  const order = cart.map(p=>`• ${p.name} — ${naira(p.price)}`).join("\n");

  const message =
    "Hello King Holi Fashion House, I would like to order:\n" +
    order +
    "\n\nTotal: " + naira(total) +
    "\n\nPayment method: PalmPay transfer" +
    "\nAccount Name: Gift Akpan" +
    "\nBank: PalmPay" +
    "\nAccount Number: 9052323217" +
    "\nI will send my payment receipt after transferring.";

  window.open(
    "https://wa.me/2347075198152?text=" + encodeURIComponent(message),
    "_blank"
  );
}
const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "King Holi Fashion House Products",
  "numberOfItems": products.length,
  "itemListElement": products.map((p, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": p.name,
      "description": p.description || "",
      ...(p.image ? { "image": new URL(p.image, window.location.href).href } : {}),
      "offers": {
        "@type": "Offer",
        "priceCurrency": "NGN",
        "price": p.price.toString()
      }
    }
  }))
};

const structuredDataScript = document.createElement("script");
structuredDataScript.type = "application/ld+json";
structuredDataScript.textContent = JSON.stringify(productStructuredData);
document.head.appendChild(structuredDataScript);

function searchMarketplace() {
  const searchInput = document.getElementById("marketSearch");
  const query = searchInput.value.trim().toLowerCase();
  const productCards = document.querySelectorAll("#products > *");

  productCards.forEach(function (card) {
    const productText = card.textContent.toLowerCase();
    card.style.display = productText.includes(query) ? "" : "none";
  });

  document.getElementById("shop").scrollIntoView({
    behavior: "smooth"
  });
}

function filterCategory(category) {
  const cards = document.querySelectorAll("#products .product");

  cards.forEach(function(card, index) {
    const p = products[index];
    const cat = (p.category || "").toLowerCase();
    let show = category === "all";

    if (category === "Women") {
      show = cat.includes("women") || cat.includes("girls") ||
             cat.includes("dress") || cat.includes("crop");
    } else if (category === "Men") {
      show = cat.includes("men") || cat.includes("jeans") ||
             cat.includes("round neck") || cat.includes("shorts") ||
             cat.includes("basic tops");
    } else if (category === "Kids") {
      show = cat.includes("girls") || cat.includes("kids");
    } else if (category === "Bags") {
      show = cat.includes("bag") || cat.includes("accessories");
    } else if (category === "Slippers") {
      show = cat.includes("slipper") || cat.includes("shoes");
    } else if (category === "Electronics") {
      show = cat.includes("electronics") || cat.includes("phones");
    } else if (category === "Home") {
      show = cat.includes("home");
    }

    card.style.display = show ? "" : "none";
  });

  document.getElementById("shop").scrollIntoView({behavior: "smooth"});
}
