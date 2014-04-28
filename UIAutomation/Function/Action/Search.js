Action.tapSearchIconOnNavBar = function () {
    $.delay(sleep);
    var tapSearchIconOnNavBar = app.navigationBar().buttons()[2];
    tapSearchIconOnNavBar.tap();
    app.mainWindow();
};

Action.tapBackOnSearchBar = function () {
    $.delay(sleep);
    var tapBackOnSearchBar = app.mainWindow().buttons()[1];
    tapBackOnSearchBar.tap();
};

//Click search, and input
Action.searchBarInput = function (skey) {
    $.delay(sleep);
    var app = target.frontMostApp();
    app.keyboard().typeString(skey);
};

Action.tapIconPlusOnTableView = function () {
    $.delay(sleep);
    var tapIconPlusOnTableView = app.mainWindow().tableViews()[1].cells()[0].buttons()[0];
    tapIconPlusOnTableView.tap();
};

//Click the icon plue different twice
Action.clickOnTheDifferentIconPlus = function () {
    $.delay(sleep);
    var clickOnTheDifferentIconPlus = app.mainWindow().tableViews()[1].cells()[1].buttons()[0];
    clickOnTheDifferentIconPlus.tap();
};

Action.tapKeyboardSearch = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
    var tapKeyboardSearch = app.keyboard().buttons()["Search"];
    tapKeyboardSearch.tap();
};


Action.tapClean = function () {
    var tapClean = app.mainWindow().textFields()[0].buttons()[0];
    tapClean.tap();
};

Action.tapKeyboardDelete = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
    var tapKeyboardDelete = app.keyboard().keys()["Delete"];
    tapKeyboardDelete.tap();
};


//clean Searches
Action.cleanSearches = function () {
    var menuButton = app.navigationBar().buttons()[1];
    menuButton.tap();
    $.delay(sleep);
    
    var tableViews = app.windows()[0].tableViews()[0];
    var tableCells = tableViews.cells()[9];
    tableCells.tap();
    $.delay(sleep);
    
    UIATarget.onAlert = function onAlert() {
        return true;
    }
    var collectionViews = app.windows()[0].collectionViews()[0];
    var cleanSearchHistory = collectionViews.cells()[1].staticTexts()[0];
    cleanSearchHistory.tap();
    $.delay(sleep);
    
    var determineButton = app.alert().buttons()[1];
    determineButton.tap();
    
    var closeButton = app.windows()[0].navigationBar().buttons()[1];
    closeButton.tap();
    menuButton.tap();
    
};


 /**
Action.tapMeunOnNavBar = function () {
    $.delay(sleep);
    var tapMeunOnNavBar = app.navigationBar().buttons()[1];
    tapMeunOnNavBar.tap();
    app.mainWindow();
};

Action.tapSettingOnTableViews = function () {
    var tapSettingOnTableViews = app.mainWindow().tableViews()[0].cells()[9].staticTexts()[0];
    tapSettingOnTableViews.tap();
    $.delay(sleep);
};

Action.tapCleanOnCollectionViews = function () {
    $.delay(sleep);
    $.delay(sleep);
    app.mainWindows().collectionViews()[0].cells()[1].tap();;
};
**/
/**
Action.searchBarInputChinese = function () {
    $.delay(sleep);
    var app = target.frontMostApp();
    var searchField = app.mainWindow().textFields()
    var sValue = "东"
    searchField.setValue(sValue);
};
**
/**
Action.tapReturnOnSearchBar = function () {
    $.delay(sleep);
     app.mainWindow().buttons()[1].tap();
};

Action.doubleClickReturnButton = function () {
    $.delay(sleep);
    app.mainWindow().navigationBar().buttons()[0].tap();
    $.delay(5);
     app.mainWindow().buttons()[0].tap();
};

Action.tapIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
     app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
};

 
//Click the icon plue different twice
Action.clickOnTheDifferentIconPlusOnFirstFloorTableView = function () {
    $.delay(sleep);
    app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
    $.delay(sleep);
    app.mainWindow().tableViews()[0].cells()[0].buttons()[0].tap();
};
**/

Action.goBackOnSearchPage = function () {
	$.delay(sleep);
	var goBack = app.navigationBar().buttons()[2];
	goBack.tap();
};

//04-23-2014
Action.goApparelCategory = function (){
    $.delay(sleep);
    app.tabBar().buttons()[2].tap();
    
    $.delay(sleep);
    app.mainWindow().tableViews()[1].cells()[0].tap();
};

Action.backToAllCategory = function () {
	$.delay(sleep);
	var backToAllCategory = app.navigationBar().buttons()[1];
	backToAllCategory.tap();
};

Action.goDiscoveryStream = function () {
	$.delay(sleep);
	app.tabBar().buttons()[0].tap();
};

Action.tapSearchIconOnApparelCategory = function () {
    var tapSearchIconOnApparelCategory = app.navigationBar().buttons()[2];
    tapSearchIconOnApparelCategory.tap();
};


