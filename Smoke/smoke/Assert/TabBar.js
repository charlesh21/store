Assert.Tabbar = function (target, app) {
    this.tabname = [
        "最新動態",
        "最愛商店",
        "全部分類",
        "購物車",
        "我的帳戶"
    ];
    var tabBar = app.tabBar();
    $.delay(sleep);
    for (var i = 0; i < 3; i++) {
        tabBar.buttons()[i].doubleTap();
        $.delay(sleep);
        //$.log(app.navigationBar().name());
        assertEquals(this.tabname[i], tabBar.buttons()[i].name());
        if (i == 3)
            assertEquals("購物車清單", app.navigationBar().name());
        else
            assertEquals(this.tabname[i], app.navigationBar().name());
    }
};
