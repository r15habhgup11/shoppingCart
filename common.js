/**
 * Created by rishabh on 6/7/17.
 */

var catalog = [];
var cart = {};

function getCatalog(done) {
    console.log("i m get getcatlog");
    $.getJSON('data/products.json', function (data) {
        catalog = data;
        done();
    });
}


function fetchCart() {
    console.log("i m fetchcart");
    let savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function addToCart(prodId) {
    console.log("i m addtocart");
    if (cart[prodId]) {
        cart[prodId]++;
    } else {
        cart[prodId] = 1
    }
    console.log("i m settingtocrt");
    localStorage.setItem('cart', JSON.stringify(cart));
    fetchCart();
}

function getQtyInCart(prodId) {
    console.log("i m getqtyincart");
    if (cart[prodId]) {
        return cart[prodId]
    } else {
        return 0;
    }
}

function removeFromCart(prodId) {
    console.log("i m removefromcart");
    if(cart[prodId]) {
        if(cart[prodId] <= 1) {
            delete cart[prodId]
        } else {
            cart[prodId]--;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    fetchCart();

}



