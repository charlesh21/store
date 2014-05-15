Assert.SideBar = function (target, app) {
    var sidebarname = [
        "",
        "編輯喜愛的分類",
        "Flickr",
        "Yahoo Mail",
        "Yahoo Sports, Free",
        "Yahoo Weather",
        "Show 2 More",
        "Settings",
        "Send Feedback",
        "Share This App"
    ];
    $.delay(sleep);
    for (var i = 1; i < 10; i++) {
        assertEquals(sidebarname[i], app.windows()[0].tableViews()[0].cells()[i].name());
        //$.log( i + ":" + app.windows()[0].tableViews()[0].cells()[i].name());
    }
};
