package com.yahoo.mobile.client.android.ecstore.test;

import android.view.Display;
import android.widget.EditText;
import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;
import com.yahoo.mobile.client.share.activity.LoginActivity;
import junit.framework.Assert;

public class TestHelper {

    public static void loginTestAccount(Solo solo){
        solo.sendKey(Solo.MENU);
        solo.sleep(2000);
        // check login status
        if(solo.searchText("登入", 1, false, true)){
            solo.clickOnText("登入");
        } else if(solo.searchText("ecmobiletest", 1, false, true)){
            solo.sendKey(Solo.MENU);
            return; 
        }

        // already has an account on system
        if(solo.searchText("ecmobiletest", 1, false, true)){
            solo.clickOnText("ecmobiletest");
            solo.waitForText("ecmobiletest", 1, 3000);
            solo.sleep(1000);
            solo.sendKey(Solo.MENU);
            return;
        }

        solo.assertCurrentActivity("check login activity", LoginActivity.class);
        EditText et = solo.getEditText(0);
        solo.enterText(et, "ecmobiletest@yahoo.com");
        et = solo.getEditText(1);
        solo.enterText(et, "3cCentral");
        solo.clickOnButton("登入");
        solo.waitForActivity(ECStoreActivity.class, 30000);
        solo.sleep(3000);
        //String s = solo.getText(1).getText().toString();
        solo.sendKey(Solo.MENU);
        //return s;
    }
    
    public static void logoutTestAccount(Solo solo){
        solo.sendKey(Solo.MENU);
        solo.sleep(2000);
        solo.clickOnText("ecmobiletest@yahoo.com");
        solo.sleep(1000);
        solo.clickOnButton("確定");
        solo.sleep(2000);
        solo.clickOnText("登入");
        solo.clickLongOnText("ecmobiletest");
        solo.clickOnText("移除");
        solo.clickOnButton("移除");
        solo.sleep(3000);
    }
    
    public static void testWebPage(Solo solo, String name){
        solo.clickOnText(name);
        solo.waitForLogMessage("webpage loaded");
        solo.sleep(2000);
        Assert.assertTrue(solo.searchText(name));
        solo.goBack();
    }

    public static void testSimplePage(Solo solo, String name){
        testSimplePage(solo, name, 2000);
    }

    public static void testSimplePage(Solo solo, String name, int millisec){
        solo.clickOnText(name);
        solo.sleep(millisec);
        solo.takeScreenshot(name);
        solo.goBack();
    }

    @SuppressWarnings("deprecation")
	public static void swipeToLeft(Solo solo, int stepCount) {
        Display display = solo.getCurrentActivity().getWindowManager().getDefaultDisplay();
		int width = display.getWidth();
        int height = display.getHeight();
        float xStart = width - 10 ;
        float xEnd = 10;
        solo.drag(xStart, xEnd, height / 2, height / 2, stepCount);
    }
    @SuppressWarnings("deprecation")
    public static void swipeToRight(Solo solo, int stepCount) {
        Display display = solo.getCurrentActivity().getWindowManager().getDefaultDisplay();
        int width = display.getWidth();
        int height = display.getHeight();
        float xStart = 10 ;
        float xEnd = width - 10;
        solo.drag(xStart, xEnd, height / 2, height / 2, stepCount);
    }
    @SuppressWarnings("deprecation")
    public static void swipeDown(Solo solo, int stepCount) {
        Display display = solo.getCurrentActivity().getWindowManager().getDefaultDisplay();
        int width = display.getWidth();
        int height = display.getHeight();
        float yStart = height - 200 ;
        float yEnd = 200;
        solo.drag(width / 2, width / 2, yStart, yEnd, stepCount);
    }
}
