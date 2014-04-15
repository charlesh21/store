package com.yahoo.mobile.client.android.ecstore.test.search;
import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import android.widget.Adapter;
import android.widget.ListView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.R;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class SearchTest extends
ActivityInstrumentationTestCase2<ECStoreActivity>{
	private Solo solo;

    @SuppressWarnings("deprecation")
	public SearchTest() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }
    protected void setUp() throws Exception {
        super.setUp();
        solo = new Solo(getInstrumentation(), getActivity());
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForText("全部分類", 1, 2000);
        // access menu search
        solo.clickOnText("全部分類");
        solo.clickOnActionBarItem(R.id.menu_search);
    	solo.enterText(0,"上衣");
    	solo.clickOnText("上衣");
    	solo.sleep(2000);
        solo.waitForText("筆結果"); 
    }
    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }
    //1959536
    @Smoke
    public void testMenuFilter(){
    	String[] MenusList = {"排序","瀏覽模式","篩選"};
    	String[] MenuList = {"最新刊登","大圖","確定"};
    	int size = MenusList.length;
    	for (int i=0; i<size; i++)
        {
    		solo.clickOnActionBarItem(R.id.menu_filter);
    		solo.clickOnText(MenusList[i]);
    		solo.clickOnText(MenuList[i]);
    		solo.sleep(1000);
    		ListView lv = (ListView)getActivity().findViewById(android.R.id.list);
    		Adapter adapter = lv.getAdapter();
    		assertNotSame(adapter.getCount(), 0);
        }
    }
    //1959537
    @Smoke
    public void testBackItemScreen(){
    	solo.clickOnActionBarItem(R.id.menu_search);
    	solo.clickInList(2); 
    	solo.sleep(2000);
    	solo.scrollToBottom();
    	solo.sleep(2000);
    	solo.goBack();
    	ListView lv = (ListView)getActivity().findViewById(android.R.id.list);
		Adapter adapter = lv.getAdapter();
		assertNotSame(adapter.getCount(), 0);
    }
    //1959538
    @Smoke
    public void testAccessItemScreen(){
    		solo.clickInList(2); 
    		TestHelper.swipeDown(solo, 3);
    		TestHelper.testWebPage(solo, "商品詳細說明");
    		TestHelper.swipeDown(solo, 3);
    		TestHelper.testSimplePage(solo, "付款及交貨方式");
    		TestHelper.swipeDown(solo, 3);
    		TestHelper.testSimplePage(solo, "購物須知");
    		TestHelper.swipeDown(solo, 3);
    		TestHelper.testSimplePage(solo, "看本店家全部商品");
    }
}
