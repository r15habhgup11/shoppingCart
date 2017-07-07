/**
 * Created by rishabh on 6/7/17.
 */

function add(prodId) {
    addToCart(prodId);
    fetchCart();
    displayCart();
}

function remove(prodId) {
    removeFromCart(prodId);
    fetchCart();
    displayCart();
}

function displayCart() {
    let cartTable = $('#cart-table');
    cartTable.empty();
    cartTable.append($(`
        <thead>
        <tr>
            <th>S.No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Amt</th>
        </tr>
        </thead>
  `));

    let cartTotal = 0;

    for (let prod in cart) {
        cartTable.append(
            $(`<tr>
            <td>${prod}</td>
            <td>${catalog[prod].name}</td>
            <td>Rs. ${catalog[prod].price}</td>
            <td>
              <i onclick="remove(${prod})" class="fa fa-minus-circle"></i>
              ${cart[prod]}
              <i onclick="add(${prod})" class="fa fa-plus-circle"></i>
            </td>
            <td>Rs. ${catalog[prod].price * cart[prod]}</td>
        </tr>`)
        );
        cartTotal += catalog[prod].price * cart[prod]
    }

    cartTable.append(
        $(`
      <tr>
      <td colspan="4"><b>TOTAL</b></td>
      <td><b>Rs. ${cartTotal}</b></td>
      </tr>
    `)
    )
}

$(function () {
    getCatalog(function () {
        fetchCart();
        displayCart();

    });
});