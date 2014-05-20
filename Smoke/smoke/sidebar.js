test("[1952841] user can access sidebar", function (target, app) {
    refreshTree();
    Action.goSideBar();
    //Assert.SideBar();
    Action.exitSideBar();
    onHomeScreen(0);
});
