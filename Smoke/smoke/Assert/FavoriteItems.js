Assert.FavoriteItems = function () {
    var ProductCollectionName = ["雅虎測試商店二", "$ 9,999"];
    $.delay(6);
    assertEquals(20, mainWindow.collectionViews()[0].cells()
        .length);
    assertEquals(ProductCollectionName[0], mainWindow.collectionViews()[0].cells()[0].name());
    assertEquals(4, mainWindow.collectionViews()[0].cells()[0].staticTexts()
        .length);
    assertEquals(ProductCollectionName[1], mainWindow.collectionViews()[0].cells()[0].staticTexts()[3].name());
};
