test("[1959536] user can use advance function", function(target, app) {
    refreshTree();
    Action.goCategorie();
    onHomeScreen(2);
});
test("[1952425] category and sub-category", function(target, app) {
    refreshTree();
    Action.goCategorie();
    Action.goSubcategory();
    onHomeScreen(2);
});
