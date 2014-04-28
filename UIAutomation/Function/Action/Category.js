Action.goApparelCategory = function (){
    $.delay(sleep);
    app.tabBar().buttons()[2].tap(); 
    
    $.delay(sleep);
    app.mainWindow().tableViews()[1].cells()[0].tap(); 
};

Action.goCommodityTab = function (){
    $.delay(sleep);
    var commodityButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[1];
    commodityButton.tap(); 
};

Action.goBack = function () {
	$.delay(sleep);
	var goBack = app.navigationBar().buttons()[1]; 
	goBack.tap();
};

Action.goDiscoveryStream = function () {
	$.delay(sleep);
	app.tabBar().buttons()[0].tap(); 
};

Action.tapCategory = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    categoryButton.tap();
};

Action.goCategoryTab = function () {
    $.delay(sleep);
    var categoryButton = app.mainWindow().collectionViews()[0].cells()[0].buttons()[0];
    categoryButton.tap();
};

Action.scrollCollectionViewElementWithName = function (sName) {
    $.delay(sleep);
    app.mainWindow().collectionViews()[0].scrollToElementWithName(sName);
};

Action.tapSearchIconOnCategoryList = function () {
    $.delay(sleep);
    app.mainWindow().navigationBar().buttons()[2].tap();
};

Action.tapAdvancedButton = function () {
    $.delay(sleep);
    var advancedButton = app.mainWindow().collectionViews()[0].buttons()[0];
    advancedButton.tap();
};

Action.tapButtonsInAdvancedBar = function (i) {
    $.delay(sleep);
    var buttonOnAdvanced = app.mainWindow().segmentedControls()[0].buttons()[i];
    buttonOnAdvanced.tap();
};

Action.tapCancelButtonInAdvancedBar = function () {
    $.delay(sleep);
    var cancelButton = app.mainWindow().navigationBar().buttons()[0];
    cancelButton.tap();
};
/**
Action.slidePriceBar = function () {
    $.delay(sleep);

    app.mainWindow().collectionViews()[0].tap();
    $.delay(sleep);

    app.mainWindow().collectionViews()[0].dragInsideWithOptions({startOffset:{x:0.91, y:0.30}, endOffset:{x:0.20, y:0.30}, duration:8});;
};
**/

Action.tapButtonOnFilterAttributeScreen = function (i) {
    $.delay(sleep);
    var buttonOnAttribute = app.mainWindow().collectionViews()[1].cells()[i];
    buttonOnAttribute.tap();
};

Action.tapItemOnProductListScreen = function () {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];
    
    //This action is tapped item big image.
    collectionViews.tapWithOptions({
        tapOffset: {
            x: 0.39,
            y: 0.56
        }
    });
};

Action.tapFavoritesIcon = function (productIndex) {
    $.delay(sleep);
    var collectionViews = app.mainWindow().collectionViews()[0];

    var itemCell = collectionViews.cells()[productIndex];
    var favoritesIcon = itemCell.buttons()[0];

    favoritesIcon.tap();
}

Action.exitLoginWindow = function () {
    $.delay(sleep);

    var exitLoginWindowButton = app.navigationBar().buttons()[0];
    exitLoginWindowButton.tap();
};