Assert.Discovery = function (target, app) {
    var navBar = app.navigationBar();
    assertEquals(3, navBar.buttons().length);
};
