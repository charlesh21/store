test("[1937852] click on the search", function () {
     Action.tapSearchIconOnNavBar();
     Assert.keyboardIsEnabled();
     Action.tapBackOnSearchBar();
     });

test("[1937854] look at the search bar tooltip text display", function () {
     Action.tapSearchIconOnNavBar();
     Assert.textIsEnabled("搜尋全部商品");
     Action.tapBackOnSearchBar();
     });

test("[1937855] Check return icon display", function () {
     Action.tapSearchIconOnNavBar();
     $.delay(sleep);
     Assert.backButtonOnSearchBar();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     });

test("[1937856] Click to return to the icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     $.delay(sleep);
     Assert.checkReturnPageDisplay("最新動態");
     });

test("[1937857] Auto complete function", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     Assert.autoCompletePageDisplay();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     });

test("[1937858] Auto complete layout view", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     Assert.checkIconPlusDisplay();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     });

test("[1937859] Click the auto - complete list right side '+' Icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     Action.tapIconPlusOnTableView();
     $.delay(sleep);
     
     //check the auto - complete list right side '+' Icon
     Assert.textIsEnabled("hp");
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     });

test("[1937860] Click on the search for 2 times suggest different keyword '+' icon on the right", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     
     //Click on the different icon plus
     Action.tapIconPlusOnTableView();
     Action.clickOnTheDifferentIconPlus();
     $.delay(sleep);
     
     // check different keyword '+' icon on the right
     Assert.textIsEnabled("hp6579");
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     });

test("[1937862] No keyword, see clear input icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     $.delay(sleep);
     
     //check clean icon display
     Assert.checkCleanIconDisplay();
     $.delay(5);
     app.mainWindow().logElementTree();
     Action.tapBackOnSearchBar();
     });

test("[1937863] Have a keyword, see clear input icon display", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     $.delay(sleep);
     
     //Verify whether the clean button
     Assert.checkCleanIcon();
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     });

test("[1937864] Click remove input icon", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     Action.tapClean();
     
     //Verify whether to remove the search box
     Assert.textIsEnabled("搜尋全部商品");
     $.delay(sleep);
     Action.tapBackOnSearchBar();
     });

test("[1937865] Check the keyboard to remove function", function () {
     $.delay(sleep);
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("1234");
     $.delay(sleep);
     Action.tapKeyboardDelete();
     
     //Verify whether the clear one character at a time
     Assert.checkEveryDelete();
     Action.tapBackOnSearchBar();
     });

//04-22-2014
test("[1937875] No search Suggestions according to look at it", function () {
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("yeruieujeueu");
     
     //Validate the input “yeruieujeueu” , no search Suggestions
     Assert.searchSuggestionsPageDisplay();
     Action.tapBackOnSearchBar();
     });

test("[1937876] No recent search shows that view", function () {
     Action.tapSearchIconOnNavBar();
     Assert.searchSuggestionsPageDisplay();
     Action.tapBackOnSearchBar();
     });

//04-23-2014
test("[1937879] Clean up into the keyword search proposal", function () {
     //Click on search and input “h”
     Action.tapSearchIconOnNavBar();
     Action.searchBarInput("h");
     Action.tapIconPlusOnTableView();
     
     //Click clean button
     Action.tapClean();
     $.delay(sleep);
     
     //Verify the success of a cleanup
     Assert.textIsEnabled("搜尋全部商品");
     Action.tapBackOnSearchBar();
});

test("[1937887] To view the search icon display", function () {
     Action.goApparelCategory();
     $.delay(sleep);
     
     //verify search Button an apparel category is enabled
     Assert.searchButtonOnApparelCategoryIsEnabled();
     Action.backToAllCategory();
     Action.goDiscoveryStream();
});




