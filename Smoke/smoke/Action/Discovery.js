Action.goDiscovery = function (target, app) {
    var mainWindow = app.mainWindow();
    $.delay(sleep);
    $.backgroundApp(2);
    //Discovery stream
    app.tabBar().buttons()[0].tap();
    $.delay(sleep);
    obj.scrollDowns(5, app);
};
