Assert.keyboardIsEnabled = function () {
    $.delay(sleep);
    var keyboardValue = app.keyboard().isEnabled();
    assertEquals(1, keyboardValue);
};

Assert.textIsEnabled = function (sText) {
    $.delay(sleep);
    var mainWindow = app.mainWindow();
    assertEquals(sText,app.mainWindow().textFields()[0].value());
};

Assert.backButtonOnSearchBar = function () {
    $.delay(sleep);
    assertEquals("icon back", app.mainWindow().buttons()[1].name());
};

Assert.checkReturnPageDisplay =function (text) {
    $.delay(sleep);
    assertEquals(text, app.mainWindow().navigationBar().name());
};

//Check if search Suggestions
Assert.autoCompletePageDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    assertTrue(app.mainWindow().tableViews()[1].cells().length<20);
};

Assert.checkIconPlusDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(sleep);
    assertEquals("icon plus", app.mainWindow().tableViews()[1].cells()[0].buttons()[0].name());
  };

Assert.searchResultsPage = function () {
    $.delay(sleep);
     UIALogger.logMessage(app.navigationBar().name());
    assertEquals("\"hp\"", app.navigationBar().name());
   
};

//check whether there is a key
Assert.checkCleanIconDisplay = function () {
    var mainWindow = app.mainWindow();
    var cleanIcon = app.mainWindow().textFields()[0].buttons()[0].isEnabled();
    if (cleanIcon != 1){
        UIALogger.logPass("No clean icon");
    }
    else{
        UIALogger.logFail("clean icon still present");
    }
};

Assert.checkCleanIcon = function () {
    assertEquals("Clear text",app.mainWindow().textFields()[0].buttons()[0].name());
};

//Verify whether the clear one character at a time
Assert.checkEveryDelete = function () {
    assertEquals("123",app.mainWindow().textFields()[0].value());
};

Assert.checkSearchPage = function (skey) {
    assertEquals(skey, app.mainWindow().navigationBar().name());
};

Assert.searchSuggestionsPageDisplay = function () {
    var mainWindow = app.mainWindow();
    $.delay(5);
    assertTrue(app.mainWindow().tableViews()[1].cells().length<1);
};

//04-23-2014
Assert.searchButtonOnApparelCategoryIsEnabled = function () {
    $.delay(sleep);
    
    //Search button position
    var searchButtonValue = app.navigationBar().buttons()[2].isEnabled();
    assertEquals(1, searchButtonValue);
};






