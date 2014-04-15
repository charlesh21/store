package com.yahoo.mobile.client.android.ecstore.test.tabbar;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class TabBarTest extends
ActivityInstrumentationTestCase2<ECStoreActivity>{
	private Solo solo;

    @SuppressWarnings("deprecation")
	public TabBarTest() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }
    protected void setUp() throws Exception {
        super.setUp();
        solo = new Solo(getInstrumentation(), getActivity());
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
    }
    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }
    //1952426
    @Smoke
    public void testTabBar(){
    	String[] TabList = {"全部分類","購物車","我的帳戶"};
    	int size = TabList.length;
    	for (int i=0; i<size; i++)
        {
    		solo.waitForText(TabList[i], 1, 2000);
            solo.clickOnText(TabList[i]);
    		assertTrue(solo.searchText(TabList[i]));
        }
    }
}
