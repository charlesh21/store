test("[1952840] user can access discovery stream", function (target, app) {
    refreshTree();
    Action.goDiscovery();
    //Assert.Discovery();
    onHomeScreen(0);
});
