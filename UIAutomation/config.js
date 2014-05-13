var Action = {};
var Assert = {};

//Action
#import "smoke/Action/FavoriteStores.js"
#import "smoke/Action/FavoriteItems.js"
#import "smoke/Action/Category.js"
#import "smoke/Action/Search.js"
#import "smoke/Action/Discovery.js"
#import "smoke/Action/MyAccount.js"
#import "smoke/Action/SideBar.js"
#import "smoke/Action/Welcome.js"
#import "smoke/Action/Shopping.js"
#import "smoke/Action/Checkout.js"
#import "smoke/Action/ItemPage.js"
#import "smoke/Action/ShoppingCartlist.js"
#import "smoke/Action/StoreListings.js"
#import "Function/Action/Category.js"
#import "Function/Action/Search.js"
#import "Function/Action/Welcome.js"

//Assert
#import "smoke/Assert/FavoriteStores.js"
#import "smoke/Assert/FavoriteItems.js"
#import "smoke/Assert/Category.js"
#import "smoke/Assert/StorePage.js"
#import "smoke/Assert/Discovery.js"
#import "smoke/Assert/MyAccount.js"
#import "smoke/Assert/SideBar.js"
#import "smoke/Assert/TabBar.js"
#import "smoke/Assert/Welcome.js"
#import "smoke/Assert/Shopping.js"
#import "smoke/Assert/Checkout.js"
#import "smoke/Assert/ItemPage.js"
#import "smoke/Assert/ShoppingCartlist.js"
#import "smoke/Assert/StoreListings.js"
#import "smoke/Assert/Search.js"
#import "Function/Assert/Category.js"
#import "Function/Assert/Search.js"
#import "Function/Assert/Welcome.js"

var target = UIATarget.localTarget();
var app = target.frontMostApp();
var tBar = app.tabBar();
var window = app.mainWindow();
var navBar = app.navigationBar();
var sBar = app.statusBar();

var tabBarDiscoveryStream = tBar.buttons()[0];
var tabBarFavoriteStores = tBar.buttons()[1];
var tabBarCategoriesNavigation = tBar.buttons()[2];
var tabBarShoppingCart = tBar.buttons()[3];
var tabBarMyAccount = tBar.buttons()[4];

var obj = {};
var sleep = 0.5;

obj.scrollDowns = function (total) {
    for (var j = 0; j < total; j++) {
        $.delay(sleep);
        window.collectionViews()[0].scrollDown();
    }
};
obj.checkInstanceExist = function (instance) {
    var errorTimes = 0;
    while (!instance && errorTimes < 50) {
        errorTimes++;
        target.delay(sleep);
    }
};
obj.logDevice = function () {
    UIALogger.logMessage("Dump Device:");
    UIALogger.logMessage(" model: " + UIATarget.localTarget().model());
    UIALogger.logMessage(" rect: " + JSON.stringify(UIATarget.localTarget().rect()));
    UIALogger.logMessage(" name: "+ UIATarget.localTarget().name());
    UIALogger.logMessage(" systemName: "+ UIATarget.localTarget().systemName());
    UIALogger.logMessage(" systemVersion: "+ UIATarget.localTarget().systemVersion());
};

UIATarget.onAlert = function onAlert(alert) {
    var title = alert.name();
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    UIATarget.localTarget().captureScreenWithName("alert_" + (new Date()).UTC());
    // test if your script should handle the alert, and if so, return true
    // otherwise, return false to use the default handler
    return false;
}
obj.logDevice();
