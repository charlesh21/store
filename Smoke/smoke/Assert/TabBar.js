Assert.Tabbar = function () {
    this.tabname = [
        "最新動態",
        "最愛商店",
        "全部分類",
        "購物車",
        "我的帳戶"
    ];
    $.delay(sleep);
    for (var i = 0; i < 3; i++) {
        tabBar.buttons()[i].doubleTap();
        $.delay(sleep);
        //$.log(app.navigationBar().name());
        //assertEquals(this.tabname[i], tabBar.buttons()[i].name());
    }
};
