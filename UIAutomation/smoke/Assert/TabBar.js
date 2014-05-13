Assert.Tabbar = function () {
    this.tabname = [
        "最新動態",
        "最愛商店",
        "全部分類",
        "購物車",
        "我的帳戶"
    ];
    $.delay(sleep);
    for (var i = 0; i < 2; i++) {
        $.delay(sleep);
        checkInstanceExist(tBar.buttons()[i].tap);  
        tBar.buttons()[i].tap();
        assertEquals(this.tabname[i], tBar.buttons()[i].name()); 
    }        
};
