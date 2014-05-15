test("[1952840] user can access discovery stream", function (target, app) {
    Action.goDiscovery(target, app);
    Assert.Discovery(target, app);
});
