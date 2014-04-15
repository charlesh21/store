package com.yahoo.mobile.client.android.ecstore.test;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import android.widget.Adapter;
import android.widget.ListView;

//import com.jayway.android.robotium.solo.Solo;
import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.R;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class CategoryListTest extends
ActivityInstrumentationTestCase2<ECStoreActivity> {

    private Solo solo;

    @SuppressWarnings("deprecation")
	public CategoryListTest() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }

    protected void setUp() throws Exception {
        super.setUp();

        solo = new Solo(getInstrumentation(), getActivity());

        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
        solo.waitForText("全部分類", 1, 2000);
        // access category tab
        solo.clickOnText("全部分類");
        //solo.waitForText("服飾 152981801 >");
        ListView lv = (ListView)getActivity().findViewById(android.R.id.list);
        Adapter adapter = lv.getAdapter();
        assertNotSame(adapter.getCount(), 0);
        solo.sleep(2000);
    }

    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }
    @Smoke
    public void testMainCategoryItem(){
        solo.clickOnText("美妝");
        solo.sleep(2000);
        boolean textFound = solo.searchText("美妝");
        assertTrue("分類美妝 not found", textFound);
        solo.takeScreenshot("分類-美妝.jpg");
        TestHelper.swipeToLeft(solo, 1);
        textFound = solo.searchText("美妝");
        assertTrue("美妝美妝商品 not found", textFound);
        solo.takeScreenshot("分類-美妝-商品.jpg");
        solo.goBack();
        solo.clickOnText("媽咪寶貝");
        solo.sleep(2000);
        textFound = solo.searchText("媽咪寶貝");
        assertTrue("分類媽咪寶貝 not found", textFound);
        solo.takeScreenshot("分類-媽咪寶貝.jpg");
        TestHelper.swipeToLeft(solo, 1);
        solo.takeScreenshot("分類-媽咪寶貝-商品.jpg");
    }

    public void testSubcategorySwipe(){
        solo.clickOnText("鞋包配飾");
        solo.sleep(2000);
        solo.takeScreenshot("分類-鞋包配飾.jpg");
        TestHelper.swipeToLeft(solo, 1);
        solo.takeScreenshot("分類-鞋包配飾-商品.jpg");
        TestHelper.swipeToRight(solo, 1);
    }

    public void testCategoryList(){
        solo.waitForText("服飾", 1, 3000);
        solo.clickOnText("服飾");
        solo.sleep(2000);
        solo.waitForText("流行女裝", 1, 3000);
        solo.takeScreenshot("分類-服飾.jpg");
        solo.clickOnText("流行女裝");
        solo.waitForText("商品", 1, 3000);
        solo.sleep(2000);
        solo.takeScreenshot("分類-服飾-流行女裝.jpg");
        solo.clickOnText("商品");
        solo.waitForText("筆結果"); // good to use!!
        solo.takeScreenshot("分類-服飾-流行女裝-商品.jpg");

        solo.clickOnActionBarItem(R.id.menu_filter);
        solo.clickOnText("大圖");
        solo.sleep(1000);
        solo.takeScreenshot("模式-大圖.jpg");
        solo.clickOnActionBarItem(R.id.menu_filter);
        solo.clickOnText("小圖");
        solo.sleep(1000);
        solo.takeScreenshot("模式-小圖.jpg");
        solo.clickOnActionBarItem(R.id.menu_filter);
        solo.clickOnText("列表");
        solo.sleep(1000);
        solo.takeScreenshot("模式-列表.jpg");
        solo.goBack();
        solo.goBack();
    }
}
