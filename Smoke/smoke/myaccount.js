test("[1952838] user can access my account page", function(target, app) {
    refreshTree();
    Action.goMyAccount();
    signIn(); 
    //Assert.MyAccount();
    onHomeScreen(4);
});
test("[1959544] user can access my Ecoupons page", function(target, app) {
    refreshTree();
    Action.goMyAccount();
    Action.tapEcoupons();
    onHomeScreen(4);
});
test("[1959548] user login out and login in normal", function(target, app) {
    refreshTree();
    Action.goMyAccount();
    signOut();
    Action.goMyAccount();
    signIn(); 
    //Assert.MyAccount();
    onHomeScreen(4);
});
test("[1959545] user can query the order details ", function(target, app) {
    refreshTree();
    Action.goMyAccount();
    Action.tapOrder();
    //Assert.Order();
    onHomeScreen(4);
});
test("[1961795] user can access itempage when click product collection from myaccount", function(target, app) {
    refreshTree();
    Action.goMyAccount();
    Action.tapItemCollection();
    //Action.tapProduct();
    onHomeScreen(4);
    signOut();
});
