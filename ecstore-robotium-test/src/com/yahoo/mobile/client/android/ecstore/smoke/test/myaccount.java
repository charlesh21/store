package com.yahoo.mobile.client.android.ecstore.smoke.test;

import android.test.ActivityInstrumentationTestCase2;
import android.test.suitebuilder.annotation.Smoke;
import android.util.Log;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.test.TestHelper;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class myaccount extends ActivityInstrumentationTestCase2<ECStoreActivity> {

    private Solo solo;
    @SuppressWarnings("deprecation")
    public myaccount() {
        super("com.yahoo.mobile.client.android.ecstore.ui", ECStoreActivity.class);
    }

    protected void setUp() throws Exception {
        super.setUp();
        solo = new Solo(getInstrumentation(), getActivity());
        solo.assertCurrentActivity("check first activity", ECStoreActivity.class);
        solo.waitForLogMessage("discoveryadapter load complete");
        solo.waitForText("我的帳戶", 1, 2000);
        solo.clickOnText("我的帳戶");
    }

    @Override
    protected void tearDown() throws Exception {
        solo.finishOpenedActivities();
        super.tearDown();
    }
    //1952838 
    @Smoke
    public void testMyAccount() {
        assertTrue(solo.waitForText("mobileappstore2@yahoo.com", 1, 5000, false));
        String[] MyAccountList = {"編輯喜愛的分類","訂單查詢","商品收藏","電子折價券"};
        int size = MyAccountList.length;
        for (int i=0; i<size; i++)
    	{
    		assertTrue(solo.searchText(MyAccountList[i]));
    		TestHelper.swipeDown(solo, 1);
    		solo.sleep(1000);
    		Log.e(MyAccountList[i],MyAccountList[i]);
        }
    }
    //1959544
    @Smoke
    public void testMyAccountEcoupon() {
        solo.waitForText("電子折價券", 1, 2000);
        solo.clickOnText("電子折價券");
        String[] MyEcouponList = {"電子折價券","使用說明","已生效"};
        int size = MyEcouponList.length;
        for (int i=0; i<size; i++)
    	{
        	Log.e(MyEcouponList[i],MyEcouponList[i]);
    		assertTrue(solo.searchText(MyEcouponList[i]));
    		solo.sleep(1000);
        }
    }
    //1959545
    @Smoke
    public void testMyAccountOrderDetails() {
        solo.waitForText("訂單查詢", 1, 2000);
        solo.clickOnText("訂單查詢");
        String[] MyEcouponList = {"訂單查詢","訂單明細","處理中"};
        int size = MyEcouponList.length;
        for (int i=0; i<size; i++)
    	{
        	Log.e(MyEcouponList[i],MyEcouponList[i]);
    		assertTrue(solo.searchText(MyEcouponList[i]));
    		solo.sleep(1000);
        }
    }
    //1959548
    @Smoke
    public void testMyAccounloginNormal() {
    	String[] MyEcouponlogin = {"登出","確定","我的帳戶","mobileappstore2"};
    	int size = MyEcouponlogin.length;
    	for (int i=0; i<size; i++)
    	{
        	Log.e(MyEcouponlogin[i],MyEcouponlogin[i]);
        	solo.waitForText(MyEcouponlogin[i], 1, 2000);
        	solo.clickOnText(MyEcouponlogin[i]);
        }
        solo.waitForText("mobileappstore2", 1, 2000);
        assertTrue(solo.searchText("mobileappstore2"));
    }
    //1961795
    @Smoke
    public void testMyAccounProductCollection() {
    	solo.waitForText("商品收藏", 1, 2000);
        solo.clickOnText("商品收藏");
        String[] MyCollectio = {"商品收藏","天藍小鋪","390"};
    	int size = MyCollectio.length;
    	for (int i=0; i<size; i++)
    	{
        	Log.e(MyCollectio[i],MyCollectio[i]);
        	solo.waitForText(MyCollectio[i], 1, 5000);
        	assertTrue(solo.searchText(MyCollectio[i]));
        }
    }
}
