
package com.yahoo.mobile.client.android.ecstore.test;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class MyAccountTest extends ActivityInstrumentationTestCase2<ECStoreActivity> {

    private Solo solo;
    @SuppressWarnings("deprecation")
    public MyAccountTest() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }

    protected void setUp() throws Exception {
        super.setUp();

        solo = new Solo(getInstrumentation(), getActivity());

        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
        solo.sleep(2000);

        TestHelper.loginTestAccount(solo);
    }

    @Override
    protected void tearDown() throws Exception {
        //TestHelper.logoutTestAccount(solo);
        solo.finishOpenedActivities();
        super.tearDown();
    }

    public void testAllPages() {
        solo.clickOnText("我的帳戶");
        solo.sleep(5000);

        TestHelper.testSimplePage(solo, "編輯喜愛的分類");

        TestHelper.testWebPage(solo, "訂單查詢");

        TestHelper.testSimplePage(solo, "商品收藏", 3000);

        TestHelper.testWebPage(solo, "電子折價券");
        
        solo.sleep(1000);
    }

}
