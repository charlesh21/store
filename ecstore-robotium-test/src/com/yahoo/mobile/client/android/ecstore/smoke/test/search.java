package com.yahoo.mobile.client.android.ecstore.smoke.test;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import android.widget.Adapter;
import android.widget.ListView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.R;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class search extends
ActivityInstrumentationTestCase2<ECStoreActivity>{
	private Solo solo;

    @SuppressWarnings("deprecation")
	public search() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }
    protected void setUp() throws Exception {
        super.setUp();
        solo = new Solo(getInstrumentation(), getActivity());
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForText("全部分類", 1, 2000);
    }
    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }
    //1959538
    @Smoke
    public void testAccessItemScreen(){
    		// access menu search
        	solo.clickOnText("全部分類",1);
        	solo.clickOnActionBarItem(R.id.menu_search);
        	solo.sleep(2000);
        	solo.enterText(0,"上衣");
        	solo.sleep(2000);
        	solo.clickOnText("上衣 男");
        	solo.sleep(2000);
        	solo.waitForText("筆結果"); 
    	    solo.clickInList(2); 
    		solo.sleep(1000);
    		TestHelper.swipeDown(solo, 3);
    		TestHelper.testWebPage(solo, "商品詳細說明");
    		TestHelper.swipeDown(solo, 3);
    		TestHelper.testSimplePage(solo, "付款及交貨方式");
    		TestHelper.swipeDown(solo, 3);
    		TestHelper.testSimplePage(solo, "看本店家全部商品");
    }
}
