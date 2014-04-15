package com.yahoo.mobile.client.android.ecstore.lib;

import java.util.ArrayList;

import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.robotium.solo.Solo;
import com.yahoo.mobile.client.android.ecstore.R;

public class config {
	static final String vTag = "DEBUG";
	static final int vMinTimeout = 2000;
	
	public int getNoOfAllViews(Solo solo)
	{
		return solo.getCurrentViews().size();
	}
	public void showCurrentViews(Solo solo)
	{
		ArrayList<View> views = solo.getCurrentViews();
		for (View v : views) 
		{
	        if (v instanceof TextView) {
	            String text = ((TextView)v).getText().toString();
	            int id = v.getId();
	            Log.d("DEBUG", id + ":" + text);
	        }
	    }
	} 
}
