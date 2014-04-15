
package com.yahoo.mobile.client.android.ecstore.test;

import android.graphics.PointF;
import android.test.ActivityInstrumentationTestCase2;
import android.widget.Adapter;
import android.widget.ListView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class DiscoveryTest extends ActivityInstrumentationTestCase2<ECStoreActivity> {

    private Solo solo;
    @SuppressWarnings("deprecation")
    public DiscoveryTest() {
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

    public void testHeavyScroll() {
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
        solo.sleep(2000);

    	ListView lv = (ListView)getActivity().findViewById(android.R.id.list);
    	Adapter adapter = lv.getAdapter();
    	assertNotSame(adapter.getCount(), 0);

    	for(int i=0;i<5;i++){
    	    solo.swipe(new PointF(100f, 200f), new PointF(100f, 200f), new PointF(100f, 400f), new PointF(100f, 400f));
    	}
    	
    	solo.takeScreenshot("discovery_no_tabbar");
    }
}
