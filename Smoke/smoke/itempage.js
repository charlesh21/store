test("[1959542] user can use items detail", function (target, app) {
    Action.goItemPage(target, app);
    Action.goItemPageDetail(target, app);
});
