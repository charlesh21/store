Assert.Welcome = function () {
    $.delay(4);
    assertEquals("歡迎", mainWindow.staticTexts()[0].name());
    assertEquals("登入", mainWindow.buttons()[0].name());
    assertEquals("略過，前往下一步", mainWindow.buttons()[1].name());
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
    $.delay(sleep);
    for (var i = 0; i < 12; i++) {
        assertEquals(this.CategoriesName[i], mainWindow.collectionViews()[0].cells()[i].name());
    }
    assertEquals("建立個人化的購物體驗", mainWindow.buttons()[0].name());
};
