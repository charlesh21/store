package com.yahoo.mobile.client.android.ecstore.smoke.test;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import android.widget.Adapter;
import android.widget.ListView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.R;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class category extends
ActivityInstrumentationTestCase2<ECStoreActivity>{
	private Solo solo;

    @SuppressWarnings("deprecation")
	public category() {
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
    public void compare(String item)
    {
    	solo.clickOnText(item);
    	solo.waitForText(item, 1, 3000);
    	assertTrue(solo.searchText("商品"));
    }
    //1952425
    @Smoke
    public void testSubCategory(){
    	String[] CategoryList = {"服飾","美妝","鞋包配飾","媽咪寶貝","電腦/週邊","家電/視聽","相機/\n手機/玩具",
    			"美食/\n保健/飲料","日用品/\n清潔/寵物","居家/\n寢具/傢俱","運動/\n戶外/休閒","圖書/\n文具/影音"};
    	int size = CategoryList.length;
    	for (int i=0; i<size; i++)
        {
    		boolean textFound = solo.searchText(CategoryList[i]);
    		assertTrue(CategoryList[i] + " not found", textFound);
        }
    	solo.scrollToTop();
    	this.compare(CategoryList[0]);
    	this.compare("流行女裝");
    	this.compare("上衣");
    	ListView lv = (ListView)getActivity().findViewById(android.R.id.list);
        Adapter adapter = lv.getAdapter();
        assertNotSame(adapter.getCount(), 0);
    }
    //1952843
    @Smoke
    public void testCategorySearch()
    {
    	solo.clickOnActionBarItem(R.id.menu_search);
    	solo.enterText(0,"上衣");
    	solo.clickOnText("上衣");
    	solo.sleep(2000);
    }
    //1959543
    @Smoke
    public void testCategorySelectSpec()
    {
    	solo.clickOnActionBarItem(R.id.menu_search);
    	solo.enterText(0,"上衣");
    	solo.clickOnText("上衣");
    	solo.sleep(2000);
    	solo.clickInList(2); 
    	solo.sleep(2000);
    	TestHelper.swipeDown(solo, 3);
    	solo.sleep(2000);
    	//solo.clickOnText("立即購買");
    }
}
