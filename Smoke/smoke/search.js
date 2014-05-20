test("[1959538] user can access item page from SRP", function (target, app) {
    refreshTree();
    Action.goItemPage();
    onHomeScreen(0);
});
test("[1961800] user change browser mode when scroll", function (target, app) {
    refreshTree();
    Action.goBrowserMode();
    onHomeScreen(0);
});

test("[1959539] user can access store page from SRP", function (target, app) {
    refreshTree();
    Action.goStorePage();
    onHomeScreen(0);
});
