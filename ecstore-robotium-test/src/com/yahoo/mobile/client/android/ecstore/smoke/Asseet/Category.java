package com.yahoo.mobile.client.android.ecstore.smoke.Asseet;

import android.test.ActivityInstrumentationTestCase2;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.ui.ECStoreActivity;

public class Category extends
ActivityInstrumentationTestCase2<ECStoreActivity>{

	public Category(String pkg, Class<ECStoreActivity> activityClass) {
		super(pkg, activityClass);
		// TODO Auto-generated constructor stub
	}
	public void CategoryAssert(Solo solo){
		String[] CategoryList = {"服飾","美妝","鞋包配飾","媽咪寶貝","電腦/週邊","家電/視聽","相機/\n手機/玩具","美食/\n保健/飲料","日用品/\n清潔/寵物","居家/\n寢具/傢俱","運動/\n戶外/休閒","圖書/\n文具/影音"};
		int size = CategoryList.length;
    	for (int i=0; i<size; i++)
        {
    		boolean textFound = solo.searchText(CategoryList[i]);
    		assertTrue(CategoryList[i] + " not found", textFound);
        }
	}
}
