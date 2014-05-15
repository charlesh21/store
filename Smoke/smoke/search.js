test("[1959538] user can access item page from SRP", function (target, app) {
    Action.goItemPage(target, app);
});
test("[1961800] user change browser mode when scroll", function (target, app) {
    Action.goBrowserMode(target, app);
});

test("[1959539] user can access store page from SRP", function (target, app) {
    Action.goStorePage(target, app);
});
