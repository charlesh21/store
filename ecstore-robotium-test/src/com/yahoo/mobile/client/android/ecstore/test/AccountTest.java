
package com.yahoo.mobile.client.android.ecstore.test;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class AccountTest extends ActivityInstrumentationTestCase2<ECStoreActivity> {

    private Solo solo;
    @SuppressWarnings("deprecation")
    public AccountTest() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }

    protected void setUp() throws Exception {
        super.setUp();
        solo = new Solo(getInstrumentation(), getActivity());
    }

    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }

    public void testAccountLogin() {
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
        solo.sleep(3000);

        TestHelper.loginTestAccount(solo);
        solo.sleep(2000);
        solo.sendKey(Solo.MENU);
        solo.sleep(2000);
        assertTrue(solo.waitForText("ecmobiletest@yahoo.com", 1, 5000, false));

        // clean up
        // sign out, remove account
        solo.clickOnText("ecmobiletest@yahoo.com");
        solo.clickOnButton("確定");
        solo.sleep(2000);
        solo.waitForText("登入", 1, 3000);

        /*
        solo.clickOnText("登入");
        solo.clickLongOnText("ecmobiletest@yahoo.com");
        solo.clickOnText("移除");
        solo.clickOnButton("移除");
        solo.sleep(3000);
        */
    }
}
