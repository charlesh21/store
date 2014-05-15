test("[1952841] user can access sidebar", function (target, app) {
    Action.goSideBar(target, app);
    Assert.SideBar(target, app);
});
