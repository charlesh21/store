package com.yahoo.mobile.client.android.ecstore.test.shoppingcart;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import android.util.Log;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class ShoppingCartTest extends
ActivityInstrumentationTestCase2<ECStoreActivity>{
	private Solo solo;

    @SuppressWarnings("deprecation")
	public ShoppingCartTest() {
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
    //1952837
    @Smoke
    public void testShoppingCartList(){
    	String[] ShoppingCartList = {"購物車清單","4件商品","下次購買","15件商品"};
    	int size = ShoppingCartList.length;
    	solo.clickOnText("購物車");
    	for (int i=0; i<size; i++)
    	{
    		assertTrue(solo.searchText(ShoppingCartList[i]));
    		TestHelper.swipeDown(solo, 1);
    		solo.sleep(1000);
    		Log.e(ShoppingCartList[i],ShoppingCartList[i]);
        }
    }
    //1959553
    @Smoke
    public void testShoppingCartDetailsPage(){
    	String[] ShoppingCartList = {"上新數位科技有限公司","購物金額小計"};
    	int size = ShoppingCartList.length;
    	solo.clickOnText("購物車");
    	for (int i=0; i<size; i++)
    	{
    		assertTrue(solo.searchText(ShoppingCartList[i]));
    		TestHelper.swipeDown(solo, 1);
    		solo.sleep(1000);
    		Log.e(ShoppingCartList[i],ShoppingCartList[i]);
        }
    }
}