Action.goItemPageDetail = function (target, app) {
    var mainWindow = app.mainWindow();
    $.delay(sleep);
    for (var i = 0; i < 6; i++) {
        //tap Item Detail
        $.delay(sleep);
        mainWindow.collectionViews()[0].cells()[5].tableViews()[0].cells()[i].tap();
        $.delay(sleep);
        app.navigationBar().buttons()[1].tap();
        $.delay(sleep);
    }
};
