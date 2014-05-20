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

var target = null;
var app = null;
var tabBar = null;
var mainWindow = null;
var navBar = null;
var statusBar = null;
var IOS7 = false;
var Simulator = false;
var times = 0;

var obj = {};
var sleep = 2;

function scrollDowns(total) 
{
   for (var j=0; j<total; j++) 
   {
       $.delay(sleep);
       mainWindow.collectionViews()[0].scrollDown();
   }
}

function logElementTree()
{
    $.delay(sleep);
    target.logElementTree();
}

function refreshTree()
{
    target = UIATarget.localTarget();
    app = target.frontMostApp();
    tabBar = app.tabBar();
    mainWindow = app.mainWindow();
    navBar = app.navigationBar();
    statusBar = app.statusBar();
    IOS7 = target.systemVersion().indexOf("7") != -1;
    Simulator = target.model().indexOf("Simulator") != -1;
}

function onHomeScreen(tab)
{
    $.delay(sleep);
    tabBar.buttons()[tab].doubleTap(); 
    logElementTree();
    var tabOK = tabBar.buttons()[tab].checkIsValid();    
    assertTrue(tabOK, "Cannot navigate back to main screen");
    UIATarget.localTarget().popTimeout();
}

function logDevice() 
{
    UIALogger.logMessage("Dump Device:");
    UIALogger.logMessage(" model: " + UIATarget.localTarget().model());
    UIALogger.logMessage(" rect: " + JSON.stringify(UIATarget.localTarget().rect()));
    UIALogger.logMessage(" name: "+ UIATarget.localTarget().name());
    UIALogger.logMessage(" systemName: "+ UIATarget.localTarget().systemName());
    UIALogger.logMessage(" systemVersion: "+ UIATarget.localTarget().systemVersion());
}

function checkInstanceExist(instance) 
{
    var errorTimes = 0;
    while (!instance && errorTimes < 50) 
    {
        errorTimes++;
        $.delay(sleep);
    }
}

UIATarget.onAlert = function onAlert(alert) 
{
    var title = alert.name();
    UIALogger.logWarning("Alert with title '" + title + "' encountered!");
    UIATarget.localTarget().captureScreenWithName("alert_" + (new Date()).UTC());
    // test if your script should handle the alert, and if so, return true
    // otherwise, return false to use the default handler
    return false;
}
 
target = UIATarget.localTarget();
logDevice();

function signIn()
{
    $.delay(sleep); 
    target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Add Account"].tap();

    // sign in form
    $.delay(sleep); 
    target.frontMostApp().mainWindow().textFields()[0].tap();
    target.frontMostApp().keyboard().typeString("mobileappstore2");
    target.frontMostApp().mainWindow().secureTextFields()[0].tap();
    target.frontMostApp().keyboard().typeString("A1234qwer");
    target.frontMostApp().mainWindow().buttons()["Sign In"].tap();
    $.delay(6); 
}

function signOut()
{
    $.delay(sleep); 
    target.frontMostApp().navigationBar().rightButton().tap();
    $.delay(sleep); 
    target.frontMostApp().actionSheet().buttons()[0].tap();
    $.delay(sleep); 
}


