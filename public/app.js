// API Base URL
const API_BASE_URL = 'http://localhost:3001/api';

// Authentication token
const AUTH_TOKEN = 'Bearer tester-token-123';

// DOM Elements
const productsListEl = document.getElementById('products-list');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const viewCartBtn = document.getElementById('view-cart');
const cartContainerEl = document.getElementById('cart-container');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    viewCartBtn.addEventListener('click', toggleCart);
});

// Toggle cart visibility
function toggleCart() {
    if (cartContainerEl.classList.contains('hidden')) {
        loadCart();
        cartContainerEl.classList.remove('hidden');
    } else {
        cartContainerEl.classList.add('hidden');
    }
}

// Fetch all products from API
async function loadProducts() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
        productsListEl.innerHTML = '<p class="error">Error loading products. Please try again later.</p>';
    }
}

// Display products in the UI
function displayProducts(products) {
    if (!products.length) {
        productsListEl.innerHTML = '<p>No products available.</p>';
        return;
    }

    productsListEl.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="product-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
            <button 
                onclick="addToCart(${product.id})" 
                ${!product.inStock ? 'disabled' : ''}
                class="add-to-cart-btn"
            >
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Add product to cart
async function addToCart(productId) {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product details');
        }
        
        const product = await response.json();
        
        const cartResponse = await fetch(`${API_BASE_URL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': AUTH_TOKEN
            },
            body: JSON.stringify({
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            })
        });
        
        if (!cartResponse.ok) {
            throw new Error('Failed to add item to cart');
        }
        
        alert(`${product.name} added to cart!`);
        updateCartCount();
    } catch (error) {
        console.error('Error adding to cart:', error);
        alert('Error adding item to cart. Please try again.');
    }
}

// Fetch cart contents
async function loadCart() {
    try {
        cartItemsEl.innerHTML = '<div class="loading">Loading cart...</div>';
        
        const response = await fetch(`${API_BASE_URL}/cart`, {
            headers: {
                'Authorization': AUTH_TOKEN
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch cart');
        }
        
        const cartItems = await response.json();
        displayCart(cartItems);
        updateCartTotal(cartItems);
    } catch (error) {
        console.error('Error loading cart:', error);
        cartItemsEl.innerHTML = '<p class="error">Error loading cart. Please try again later.</p>';
    }
}

// Display cart items in the UI
function displayCart(items) {
    if (!items.length) {
        cartItemsEl.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cartItemsEl.innerHTML = items.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// Update cart count in header
async function updateCartCount() {
    try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            headers: {
                'Authorization': AUTH_TOKEN
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch cart');
        }
        
        const cartItems = await response.json();
        cartCountEl.textContent = cartItems.length;
    } catch (error) {
        console.error('Error updating cart count:', error);
    }
}

// Calculate and update cart total
function updateCartTotal(items) {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalEl.textContent = total.toFixed(2);
}

// Initialize - update cart count on page load
updateCartCount();
