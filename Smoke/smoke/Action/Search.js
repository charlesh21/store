Action.goBrowserMode = function (target, app) {
    var mainWindow = app.mainWindow();
    var tabBar = app.tabBar();
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    $.delay(sleep);
    mainWindow.collectionViews()[0].cells()[0].buttons()[0].tap();
    obj.scrollDowns(1);
    mainWindow.collectionViews()[0].buttons()[1].tap();
    $.delay(sleep);
    mainWindow.segmentedControls()[0].buttons()[1].tap();
    $.delay(sleep);
    mainWindow.buttons()[2].tap();
};
Action.goStorePage = function (target, app) {
    var mainWindow = app.mainWindow();
    var tabBar = app.tabBar();
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    $.delay(sleep);
    mainWindow.collectionViews()[0].cells()[0].buttons()[1].tap();
};
Action.goItemPage = function (target, app) {
    var mainWindow = app.mainWindow();
    var tabBar = app.tabBar();
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    $.delay(sleep);
    mainWindow.collectionViews()[0].cells()[2].staticTexts()[2].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].scrollDown();
};
Action.searchKeyword = function (key) {
    $.delay(sleep);
    app.navigationBar().buttons()[2].tap();
    $.delay(sleep);
    app.keyboard().typeString(key);
};
Action.goCategoryPage = function () {
    var tabBar = app.tabBar();
    $.delay(sleep);
    tabBarCategoriesNavigation.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    $.delay(sleep);
    mainWindow.collectionViews()[0].cells()[0].buttons()[0].tap();
    obj.scrollDowns(1);
    mainWindow.collectionViews()[0].buttons()[1].tap();
    $.delay(sleep);
    mainWindow.segmentedControls()[0].buttons()[1].tap();
    $.delay(sleep);
    mainWindow.buttons()[2].tap();
};
