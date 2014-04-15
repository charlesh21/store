
package com.yahoo.mobile.client.android.ecstore.test;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class TabTest extends ActivityInstrumentationTestCase2<ECStoreActivity> {

    private Solo solo;

    @SuppressWarnings("deprecation")
	public TabTest() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }

    protected void setUp() throws Exception {
        super.setUp();

        solo = new Solo(getInstrumentation(), getActivity());

        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
        solo.sleep(2000);
    }

    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }

    public void testTabSwitch() {
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        TestHelper.loginTestAccount(solo);
        solo.clickOnText("最愛商店");
        solo.sleep(5000);
        solo.takeScreenshot("最愛商店");
        solo.clickOnText("全部分類");
        solo.sleep(5000);
        solo.takeScreenshot("全部分類");
        solo.clickOnText("購物車");
        solo.sleep(5000);
        solo.takeScreenshot("購物車");
        solo.clickOnText("我的帳戶");
        solo.sleep(5000);
        solo.takeScreenshot("我的帳戶");
        TestHelper.logoutTestAccount(solo);
    }

}
