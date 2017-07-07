/**
 Created by rishabh on 6/7/17.
 * */


function add(prodId) {
    console.log("i m add");
    addToCart(prodId);
    displayCatalog();
}

function displayCatalog() {
    console.log("i m displaycatlog");
    let catContainer = $('#catalog-container');
    catContainer.empty();
    for (let product of catalog) {
        let cartQty = getQtyInCart(product.id);
        catContainer.append(
            $(
                `<div class="col-md-4">
                <img style="width: 300px; height: 300px;" src="pictures/${product.img}">
                 <div class="product-data">
                      <div class=""> Rs. ${product.price} </div>
                       <button onclick="add(${product.id})" class="btn btn-success">
                         Add To Cart
                        </button>
                         <span>${cartQty} in Cart</span>
                      </div>
                   </div>`
            )
        )
    }
}



    getCatalog(function () {
        fetchCart();
        displayCatalog()
    });

