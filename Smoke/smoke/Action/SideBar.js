Action.goSideBar = function (target, app) {
    var mainWindow = app.mainWindow();
    var navBar = app.navigationBar();
    $.delay(sleep);
    //Discovery stream
    app.tabBar().buttons()[0].tap();
    $.delay(sleep);
    navBar.buttons()[1].tap();
};
