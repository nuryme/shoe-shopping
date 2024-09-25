const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 99.99,
        description: "High-quality over-ear Bluetooth headphones with noise cancellation.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1681233751882-74059d491f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        name: "Smartwatch",
        price: 149.99,
        description: "A sleek and stylish smartwatch with fitness tracking and notifications.",
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "4K Ultra HD TV",
        price: 599.99,
        description: "55-inch 4K UHD TV with HDR and smart features for streaming.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1681147547346-2d73c90988d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        name: "Gaming Laptop",
        price: 1299.99,
        description: "High-performance laptop with a powerful graphics card and fast processor.",
        imageUrl: "https://plus.unsplash.com/premium_photo-1681147546984-4ae79ec72bfa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        price: 49.99,
        description: "Compact wireless earbuds with long battery life and noise isolation.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlu99v76I5u1Weu6iL6sAljm55brvyHfRsQ&s",
    },
    {
        id: 6,
        name: "Smartphone",
        price: 799.99,
        description: "Flagship smartphone with an edge-to-edge display and a powerful camera system.",
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 7,
        name: "Tablet",
        price: 299.99,
        description: "10.5-inch tablet with a high-resolution display, perfect for work or entertainment.",
        imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 8,
        name: "Portable Bluetooth Speaker",
        price: 59.99,
        description: "Waterproof and portable Bluetooth speaker with impressive sound quality.",
        imageUrl: "https://support.content.office.net/en-us/media/2a52aba3-4d8f-4851-9a17-6e6f2e066f30.png",
    },
    {
        id: 9,
        name: "Action Camera",
        price: 249.99,
        description: "Durable 4K action camera with image stabilization, perfect for adventures.",
        imageUrl: "https://d1e4pidl3fu268.cloudfront.net/26f81f6a-11c0-4613-bc3c-648c894f4a57/smartdevices.crop_293x220_49%2C0.preview.jpg",
    },
    {
        id: 10,
        name: "Fitness Tracker",
        price: 79.99,
        description: "Track your daily activity, workouts, and sleep with this stylish fitness tracker.",
        imageUrl: "https://cdn.britannica.com/87/170487-050-6884B3FD/Computer-keyboard.jpg",
    }
];

function displayProducts() {
    for (let item of products) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-xl">
                <figure class="px-10 pt-10">
                    <img class="w-[400px] h-[300px] rounded-lg" src=${item.imageUrl}
                        alt="Shoes" class="rounded-xl"/>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${item.name}</h2>
                    <p>${item.description}</p>
                    <p class = 'text-rose-500 font-medium'>$${item.price}</p>
                    <div class="card-actions">
                        <button onclick = 'addToCart("${item.name}",${item.price})' class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `
        document.getElementById('products').appendChild(card)
    }
}
displayProducts()
let cartCount = 0;
let totalPrice = 0;
function addToCart(name, price) {
    cartCount++;
    const cartCountContainer = document.getElementById('cart-count');
    cartCountContainer.innerText = cartCount;
    const totalItems = document.getElementById('total-items');
    totalItems.innerText = cartCount;
    const totalPriceContainer = document.getElementById('total-price');
    totalPrice += price;
    totalPriceContainer.innerText = totalPrice;
}