test("[1959536] user can use advance function", function (target, app) {
    var window = app.mainWindow();
    var navBar = window.navigationBar();
    Action.goCategorie(target, app);
});
test("[1952425] category and sub-category", function (target, app) {
    Action.goCategorie(target, app);
    Action.goSubcategory(target, app);
});
