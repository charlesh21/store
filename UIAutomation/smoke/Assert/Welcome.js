Assert.Welcome = function () {
    obj.checkInstanceExist(window.staticTexts()[0].name);
    assertEquals("歡迎", window.staticTexts()[0].name());
    obj.checkInstanceExist(window.buttons()[0].name);
    assertEquals("登入", window.buttons()[0].name());
    obj.checkInstanceExist(window.buttons()[1].name);
    assertEquals("略過，前往下一步", window.buttons()[1].name());
};
Assert.FavoriteCategories = function () {
    this.CategoriesName = [
        "服飾",
        "美妝",
        "鞋包配飾",
        "媽咪寶貝",
        "電腦/週邊",
        "家電/視聽",
        "相機/ 手機/玩具",
        "美食/ 保健/飲料",
        "醫療/ 日用品/寵物",
        "居家/ 寢具/傢俱",
        "運動/ 戶外/休閒",
        "圖書/ 文具/影音"
    ];
    $.delay(3);
    for (var i = 0; i < 12; i++) {
        obj.checkInstanceExist(window.collectionViews()[0].cells()[i].name);
        assertEquals(this.CategoriesName[i], window.collectionViews()[0].cells()[i].name());
    }
    obj.checkInstanceExist(window.buttons()[0].name);
    assertEquals("建立個人化的購物體驗", window.buttons()[0].name());
};
