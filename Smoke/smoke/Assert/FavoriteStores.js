Assert.FavoriteStores = function () {
    var FavoriteStoresName = [
        "你的最愛商店",
        "雅虎測試商店一 CCC"
    ];
    $.delay(10);
    assertEquals(1, mainWindow.collectionViews()[0].staticTexts()
        .length);
    assertEquals(FavoriteStoresName[0], mainWindow.collectionViews()[0].staticTexts()[0].name());
    assertEquals(FavoriteStoresName[1], mainWindow.collectionViews()[0].cells()[0].name());
};
Assert.delFavoriteStores = function () {
    var FavoriteStoresName = [
        "你的最愛商店",
        "H&D居家生活設計館"
    ];
    $.delay(10);
    assertEquals(1, mainWindow.collectionViews()[0].staticTexts()
        .length);
    assertEquals(FavoriteStoresName[0], mainWindow.collectionViews()[0].staticTexts()[0].name());
    assertEquals(FavoriteStoresName[1], mainWindow.collectionViews()[0].cells()[0].name());
};
