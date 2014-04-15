package com.yahoo.mobile.client.android.ecstore.smoke.test;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class tabbar extends ActivityInstrumentationTestCase2<ECStoreActivity>{
	private Solo solo;
	public tabbar() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }
    protected void setUp() throws Exception {
        super.setUp();
        solo = new Solo(getInstrumentation(), getActivity());
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
    }
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }
    //1952426
    @Smoke
    public void testTabBar(){
    	String[] TabList = {"最新動態","最愛商店","全部分類","購物車","我的帳戶"};
    	solo.sleep(2000);
    	solo.clickOnText(TabList[0],2);
    	assertTrue(solo.searchText(TabList[0]));
    	int size = TabList.length;
    	for (int i=1; i<size; i++)
        {
            solo.clickOnText(TabList[i],1);
            solo.sleep(2000);
    		assertTrue(solo.searchText(TabList[i]));
        }
    }
}
