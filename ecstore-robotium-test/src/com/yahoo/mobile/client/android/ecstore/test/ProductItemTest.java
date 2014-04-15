
package com.yahoo.mobile.client.android.ecstore.test;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class ProductItemTest extends ActivityInstrumentationTestCase2<ECStoreActivity> {

    private Solo solo;
    @SuppressWarnings("deprecation")
    public ProductItemTest() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }

    protected void setUp() throws Exception {
        super.setUp();

        solo = new Solo(getInstrumentation(), getActivity());

        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
        solo.sleep(5000);
    }

    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }

    public void testDailyDeal() {
        solo.clickOnText("天天");
        solo.sleep(3000);
        solo.takeScreenshot();
        TestHelper.swipeDown(solo, 3);
        solo.takeScreenshot();
        
        TestHelper.testWebPage(solo, "商品詳細說明");

        TestHelper.testSimplePage(solo, "付款及交貨方式");

        TestHelper.testSimplePage(solo, "購物須知", 4000);

        if(solo.searchText("促銷活動", 1, false, true)){
            TestHelper.testSimplePage(solo, "促銷活動", 2000);
        }

        if(solo.searchText("附送贈品", 1, false, true)){
            TestHelper.testSimplePage(solo, "附送贈品", 2000);
        }

        if(solo.searchText("加購商品", 1, false, true)){
            TestHelper.testSimplePage(solo, "加購商品", 2000);
        }

        //solo.clickOnText("看本店家全部商品");
    }

}
