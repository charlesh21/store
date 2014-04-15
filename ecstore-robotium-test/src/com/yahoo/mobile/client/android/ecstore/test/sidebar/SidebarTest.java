package com.yahoo.mobile.client.android.ecstore.test.sidebar;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import android.util.Log;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class SidebarTest extends
ActivityInstrumentationTestCase2<ECStoreActivity>{
	private Solo solo;

    @SuppressWarnings("deprecation")
	public SidebarTest() {
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
    //1952841
    @Smoke
    public void testSidebar(){
    	String[] SidebarList = {"編輯分類偏好","Flickr","Yahoo Mail","Yahoo Sports","Yahoo氣象","顯示更多","發表建議","分享這個App","給這個App評分"};
    	int size = SidebarList.length;
    	solo.clickOnText("最新動態");
    	assertTrue(solo.waitForText("tw_store_user76@yahoo.com", 1, 5000, false));
    	for (int i=0; i<size; i++)
    	{
    		assertTrue(solo.searchText(SidebarList[i]));
    		TestHelper.swipeDown(solo, 1);
    		solo.sleep(1000);
    		Log.e(SidebarList[i],SidebarList[i]);
        }
    }
}

