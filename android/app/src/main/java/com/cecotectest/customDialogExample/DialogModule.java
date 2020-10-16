package com.cecotectest.customDialogExample;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import java.util.Map;
import java.util.HashMap;

public class DialogModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    private static final String E_LAYOUT_ERROR = "E_LAYOUT_ERROR";

    DialogModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "DialogExample";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, Promise promise) {
        WritableMap map = Arguments.createMap();
        map.putString("result", "Clicked ok button");

        AlertDialog alertDialog = new AlertDialog.Builder(getCurrentActivity()).create();
        alertDialog.setTitle("Alert");
        alertDialog.setMessage((message == null ? "" : message));
        alertDialog.setButton(AlertDialog.BUTTON_NEUTRAL, "OK",
                new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                        try {
                            promise.resolve(map);
                        } catch (IllegalViewOperationException e) {
                            promise.reject(E_LAYOUT_ERROR, e);
                        }
                    }
                });
        alertDialog.show();
//        Snackbar.make(null, "SN" + message, Snackbar.LENGTH_SHORT)
//                .show();
//        Toast.makeText(getReactApplicationContext(), "SN" + message, duration).show();
    }
}
