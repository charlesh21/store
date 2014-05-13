Action.goBrowserMode = function () {
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    obj.checkInstanceExist(window.collectionViews()[0].cells()[0].buttons()[0].tap);  
    window.collectionViews()[0].cells()[0].buttons()[0].tap();
    obj.scrollDowns(1);
    obj.checkInstanceExist(window.collectionViews()[0].buttons()[1].tap);
    window.collectionViews()[0].buttons()[1].tap();
    obj.checkInstanceExist(window.segmentedControls()[0].buttons()[1].tap);
    window.segmentedControls()[0].buttons()[1].tap();
    obj.checkInstanceExist(window.buttons()[2].tap);
    window.buttons()[2].tap();
};
Action.goStorePage = function () {
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    obj.checkInstanceExist(window.collectionViews()[0].cells()[0].buttons()[1].tap);
    window.collectionViews()[0].cells()[0].buttons()[1].tap();
};
Action.goItemPage = function () {
    $.delay(sleep);
    tabBarDiscoveryStream.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    obj.checkInstanceExist(window.collectionViews()[0].cells()[2].staticTexts()[2].tap);
    window.collectionViews()[0].cells()[2].staticTexts()[2].tap();
    obj.checkInstanceExist(window.collectionViews()[0].scrollDown);
    window.collectionViews()[0].scrollDown();
};
Action.searchKeyword = function (key) {
    $.delay(sleep);
    obj.checkInstanceExist(app.navigationBar().buttons()[2].tap);
    app.navigationBar().buttons()[2].tap();
    $.delay(sleep);
    app.keyboard().typeString(key);
};
Action.goCategoryPage = function () {
    $.delay(sleep);
    tabBarCategoriesNavigation.tap();
    $.delay(sleep);
    Action.searchKeyword("test\n");
    obj.checkInstanceExist(window.collectionViews()[0].cells()[0].buttons()[0].tap);
    window.collectionViews()[0].cells()[0].buttons()[0].tap();
    obj.checkInstanceExist(window.collectionViews()[0].buttons()[1].tap);
    window.collectionViews()[0].buttons()[1].tap();
    obj.checkInstanceExist(window.segmentedControls()[0].buttons()[1].tap);
    window.segmentedControls()[0].buttons()[1].tap();
    obj.checkInstanceExist(window.buttons()[2].tap);
    window.buttons()[2].tap();
};
