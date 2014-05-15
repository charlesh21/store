test("[1952830] user can use shopping cart", function () {
    Action.goItemPage();
    Action.addShoppingCart();
    Action.goShoppingCart();
});
