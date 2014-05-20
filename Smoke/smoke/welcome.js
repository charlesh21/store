test("[1952832] user can access welcome screen", function (target, app) {
    refreshTree();
    //Assert.Welcome();
    Action.goFavoriteCategories();
    //Assert.FavoriteCategories();
    Action.goFirstDiscoveryStream();
    //onHomeScreen();
});
