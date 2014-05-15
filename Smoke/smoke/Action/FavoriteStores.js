Action.goFavoriteStores = function () {
    $.delay(sleep);
    tabBar.buttons()[1].tap();
};
Action.tapFavoriteStores = function () {
    $.delay(sleep);
    mainWindow.collectionViews()[0].cells()[0].tap();
    $.delay(sleep);
    app.navigationBar()
        .buttons()[2].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].cells()[0].staticTexts()[1].tap();
    $.delay(sleep);
    app.navigationBar()
        .buttons()[2].tap();
    $.delay(sleep);
    mainWindow.collectionViews()[0].cells()[0].buttons()[0].tap();
    $.delay(sleep);
    app.navigationBar()
        .buttons()[2].tap();
};
Action.addFavoriteStores = function () {
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    //tap search bar
    Action.searchKeyword("ccc\n");
    $.delay(sleep);
    //tap store
    mainWindow.collectionViews()[0].cells()[0].buttons()[1].tap();
    $.delay(sleep);
    //tap icon heart
    mainWindow.collectionViews()[0].cells()[1].buttons()["icon heart empty"].tap();
    //mainWindow.collectionViews()[0].cells()[2].buttons()[0].tap();
};
Action.delFavoriteStores = function () {
    $.delay(sleep);
    tabBar.buttons()[0].tap();
    $.delay(sleep);
    //tap icon heart
    //mainWindow.collectionViews()[0].cells()[2].buttons()[0].tap();
    mainWindow.collectionViews()[0].cells()[1].buttons()["icon heart empty"].tap();
};
